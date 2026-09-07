package org.springframework.ai.chat.client;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public final class ChatClient {

    private final ChatModel model;

    private ChatClient(ChatModel model) {
        this.model = model;
    }

    public static Builder builder(ChatModel model) {
        return new Builder(model);
    }

    public PromptSpec prompt() {
        return new PromptSpec(model);
    }

    public static final class Builder {
        private final ChatModel model;

        private Builder(ChatModel model) {
            this.model = model;
        }

        public ChatClient build() {
            return new ChatClient(model);
        }
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

        public PromptSpec system(String text) {
            messages.add(new Message("system", text));
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
            throw new UnsupportedOperationException("Structured output appears in a later task.");
        }
    }
}
