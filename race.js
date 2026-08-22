const user = Promise.resolve("User loaded");
const orders = Promise.reject("Orders failed");
const notifications = Promise.resolve("Notifications loaded");

Promise.race([user, orders, notifications])
  .then(result => {
    console.log("First to finish (success):", result);
  })
  .catch(error => {
    console.log("First to finish (failure):", error);
  });