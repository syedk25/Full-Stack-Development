package dev.finashkin.springai;

/**
 * Shows how a named placeholder becomes concrete prompt text.
 */
public final class PromptTemplateExample {

    private static final String TEMPLATE = "Summarize this: {input}";

    private PromptTemplateExample() {
    }

    public static String render(String input) {
        // This mirrors .param("input", input) in a ChatClient prompt template.
        return TEMPLATE.replace("{input}", input);
    }
}
