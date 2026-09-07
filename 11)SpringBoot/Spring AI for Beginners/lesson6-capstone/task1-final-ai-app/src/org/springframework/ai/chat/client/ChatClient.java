package org.springframework.ai.chat.client;

import java.lang.reflect.Constructor;
import java.lang.reflect.RecordComponent;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public final class ChatClient {
    private final ChatModel model;

    public ChatClient(ChatModel model) {
        this.model = model;
    }

    public PromptSpec prompt() {
        return new PromptSpec(model);
    }

    public interface ChatModel {
        String call(Prompt prompt);
    }

    public record Prompt(List<Message> messages) {
        public String text() {
            StringBuilder builder = new StringBuilder();
            for (Message message : messages) {
                if (!builder.isEmpty()) {
                    builder.append("\n");
                }
                builder.append(message.text());
            }
            return builder.toString();
        }
    }

    public record Message(String role, String text) {
    }

    public static final class PromptSpec {
        private final ChatModel model;
        private final List<Message> messages = new ArrayList<>();

        private PromptSpec(ChatModel model) {
            this.model = model;
        }

        public PromptSpec user(String text) {
            messages.add(new Message("user", text));
            return this;
        }

        public PromptSpec user(Consumer<UserSpec> consumer) {
            UserSpec spec = new UserSpec();
            consumer.accept(spec);
            messages.add(new Message("user", spec.render()));
            return this;
        }

        public CallResponseSpec call() {
            return new CallResponseSpec(model, new Prompt(List.copyOf(messages)));
        }
    }

    public static final class UserSpec {
        private String text = "";

        public UserSpec text(String text) {
            this.text = text;
            return this;
        }

        public UserSpec param(String name, String value) {
            text = text.replace("{" + name + "}", value);
            return this;
        }

        private String render() {
            return text;
        }
    }

    public static final class CallResponseSpec {
        private final ChatModel model;
        private final Prompt prompt;

        private CallResponseSpec(ChatModel model, Prompt prompt) {
            this.model = model;
            this.prompt = prompt;
        }

        public String content() {
            return model.call(prompt);
        }

        public <T> T entity(Class<T> entityType) {
            String json = model.call(prompt);
            try {
                RecordComponent[] components = entityType.getRecordComponents();
                Class<?>[] parameterTypes = new Class<?>[components.length];
                Object[] arguments = new Object[components.length];
                for (int i = 0; i < components.length; i++) {
                    parameterTypes[i] = components[i].getType();
                    arguments[i] = valueFor(json, components[i]);
                }
                Constructor<T> constructor = entityType.getDeclaredConstructor(parameterTypes);
                return constructor.newInstance(arguments);
            } catch (ReflectiveOperationException exception) {
                throw new IllegalStateException("Could not create " + entityType.getName(), exception);
            }
        }

        private static Object valueFor(String json, RecordComponent component) {
            return switch (component.getName()) {
                case "issues" -> parseStringArray(json, "issues");
                case "qualityScore" -> parseInt(json, "qualityScore");
                case "summary" -> parseString(json, "summary");
                default -> throw new IllegalArgumentException("Unexpected field " + component.getName());
            };
        }

        private static List<String> parseStringArray(String json, String name) {
            Matcher matcher = Pattern.compile("\"" + name + "\"\\s*:\\s*\\[(.*?)]", Pattern.DOTALL).matcher(json);
            if (!matcher.find()) {
                return List.of();
            }
            Matcher itemMatcher = Pattern.compile("\"(.*?)\"").matcher(matcher.group(1));
            List<String> items = new ArrayList<>();
            while (itemMatcher.find()) {
                items.add(itemMatcher.group(1));
            }
            return items;
        }

        private static int parseInt(String json, String name) {
            Matcher matcher = Pattern.compile("\"" + name + "\"\\s*:\\s*(\\d+)").matcher(json);
            return matcher.find() ? Integer.parseInt(matcher.group(1)) : 0;
        }

        private static String parseString(String json, String name) {
            Matcher matcher = Pattern.compile("\"" + name + "\"\\s*:\\s*\"(.*?)\"").matcher(json);
            return matcher.find() ? matcher.group(1) : "";
        }
    }
}
