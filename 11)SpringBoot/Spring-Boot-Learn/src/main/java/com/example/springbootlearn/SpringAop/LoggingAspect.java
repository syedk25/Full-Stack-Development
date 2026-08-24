package com.example.springbootlearn.SpringAop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import java.util.Arrays;

/**
 * THE "ASPECT" — a class that holds cross-cutting logic (here: logging + timing).
 *
 * @Aspect      = "I am an aspect, Spring, please weave my advice into matching methods"
 * @Component   = "and yes, create me as a bean"
 *
 * HOW IT WORKS:
 * Spring creates a PROXY around OrderService. Every call to OrderService
 * actually goes through the proxy first, which runs our advice, then
 * forwards to the real method. OrderService never knows it's being wrapped.
 */
@Aspect
@Component
public class LoggingAspect {

    // ------------------------------------------------------------------
    // 1. POINTCUT — "WHERE" should my advice run?
    //    A pointcut is a rule that selects which methods to intercept.
    //    This one says: every method inside the SpringAop package.
    // ------------------------------------------------------------------
    @Pointcut("execution(* com.example.springbootlearn.SpringAop.*.*(..))")
    public void allServiceMethods() {
        // Body is intentionally empty. A pointcut is just a reusable rule.
    }

    // ------------------------------------------------------------------
    // 2. @Before — runs BEFORE the target method
    //    Great for: validation, security checks, "starting..." logs
    // ------------------------------------------------------------------
    @Before("allServiceMethods()")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("[AOP @Before]      About to call: " + joinPoint.getSignature().getName()
                + " | args: " + Arrays.toString(joinPoint.getArgs()));
    }

    // ------------------------------------------------------------------
    // 3. @AfterReturning — runs AFTER the method returns successfully
    //    'returning="result"' lets us capture the return value.
    //    Great for: auditing, response logging
    // ------------------------------------------------------------------
    @AfterReturning(pointcut = "allServiceMethods()", returning = "result")
    public void logAfterReturning(Object result) {
        System.out.println("[AOP @AfterReturning] Method finished OK. Returned: " + result);
    }

    // ------------------------------------------------------------------
    // 4. @AfterThrowing — runs ONLY if the method threw an exception
    //    'throwing="ex"' lets us capture the exception.
    //    Great for: error logging, alerting, rollback
    // ------------------------------------------------------------------
    @AfterThrowing(pointcut = "allServiceMethods()", throwing = "ex")
    public void logAfterThrowing(Exception ex) {
        System.out.println("[AOP @AfterThrowing] Method FAILED with exception: " + ex.getMessage());
    }

    // ------------------------------------------------------------------
    // 5. @After — runs ALWAYS (success OR failure) — like finally{}
    //    Great for: releasing resources, cleanup
    // ------------------------------------------------------------------
    @After("allServiceMethods()")
    public void logAfter() {
        System.out.println("[AOP @After]       Method execution complete (always runs).\n");
    }

    // ------------------------------------------------------------------
    // 6. @Around — the MOST POWERFUL advice.
    //    It wraps the method: it can run code BEFORE and AFTER,
    //    measure execution time, and even decide whether to run
    //    the method at all (by not calling joinPoint.proceed()).
    //
    //    NOTE: to avoid double-logging with the simple advices above,
    //    this one targets ONLY the placeOrder method.
    // ------------------------------------------------------------------
    @Around("execution(* com.example.springbootlearn.SpringAop.OrderService.placeOrder(..))")
    public Object timeTheMethod(ProceedingJoinPoint joinPoint) throws Throwable {
        long start = System.currentTimeMillis();

        Object result = joinPoint.proceed(); // <-- actually runs the real method

        long duration = System.currentTimeMillis() - start;
        System.out.println("[AOP @Around]      placeOrder() took " + duration + " ms");
        return result;
    }

}
