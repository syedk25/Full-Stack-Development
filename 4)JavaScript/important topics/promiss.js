/* A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Think of it as a placeholder for a value that is not ready yet, but will be available in the future." */

/* Three States:
Pending: The initial state. The asynchronous operation is still running, and the outcome is unknown.
Fulfilled: The operation completed successfully. The promise now holds the resulting value.
Rejected: The operation failed due to an error. The promise now holds the reason (error object) for the failure.

Note: Once a promise is either Fulfilled or Rejected, it becomes settled. Its state can never change again. */


const fetchData = new Promise((resolve, reject) => {

  let success = true; // Simulating an API outcome

  setTimeout(() => {
    if (success) {
      resolve("Data loaded successfully!"); // Moves state to Fulfilled
    } else {
      reject(new Error("Network Timeout")); // Moves state to Rejected
    }
  }, 1000);
});

fetchData
  .then((result) => {
    console.log(result); // Runs if resolved: "Data loaded successfully!"
  })
  .catch((error) => {
    console.error(error.message); // Runs if rejected
  })
  .finally(() => {
    console.log("Operation finished."); // Runs no matter what (clean up step)
  });
