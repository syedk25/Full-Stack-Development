package dev.finashkin.springai;

import java.util.List;

/**
 * A concise reference for the controller-versus-service quick check.
 */
public final class ControllerServiceResponsibilities {

    public static final List<String> CONTROLLER = List.of(
            "Map HTTP paths",
            "Read request input",
            "Return the HTTP response"
    );

    public static final List<String> SERVICE = List.of(
            "Hold application logic",
            "Build the AI request",
            "Return the model result"
    );

    private ControllerServiceResponsibilities() {
    }
}
