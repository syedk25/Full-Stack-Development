package dev.finashkin.springai;

/**
 * The stable and variable parts of a reusable prompt.
 */
public final class PromptBuildingBlocks {

    public static final String SYSTEM_MESSAGE =
            "You are a senior Java developer. Explain clearly and briefly.";

    public static final String SUMMARY_TEMPLATE = """
            Summarize the following text in one sentence:

            {input}
            """;

    private PromptBuildingBlocks() {
    }

    public static String renderSummaryPrompt(String input) {
        return SUMMARY_TEMPLATE.replace("{input}", input);
    }
}
