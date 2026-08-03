@SpringBootApplication: this annotation contains;

 1)@SpringBootConfiguration: mark this class as configuration class and
starting point of the application.

2)@EnableAutoConfiguration: Enable autoconfiguration feature dynamically
configure the environment based on the pom.xml

3)@ComponentScane: Scan all annotated classes,throughout the current package.
like; @Service @Component @Repository.


springApplication : Utility Class From SpringBoot 
.run(...)         : Launches/Start the entire application.
SpringBootDemoApplication.class : use this class as starting point
args                : command line arguments passed from Java , allo SB to accept external
                      configuration.


    [1] Start Application
            │
            ▼
┌────────────────────────┐
│ DemoApplication.java   │ <-- Runs main(), activates @SpringBootApplication
└───────────┬────────────┘
            │
            │ [2] Automatic Component Scan
            ▼     (Searches ALL sub-folders for annotations)
┌────────────────────────┐
│ constructor_learning/ │
│   ├─ EmailService      │ <-- Found @Component! Spring creates instance.
│   ├─ Manager           │ <-- Found @Component! Spring injects EmailService.
│   └─ LearningRunner    │ <-- Found @Configuration! Spring reads the @Bean methods.
└───────────┬────────────┘
│
│ [3] Execution Handoff
▼     (Spring looks for any CommandLineRunner beans to run)
┌────────────────────────┐
│ LearningRunner.java    │ <-- Executes code inside executeLearningFlow()
└────────────────────────┘
