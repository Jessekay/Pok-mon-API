const user = Promise.resolve("User loaded");
const orders = Promise.resolve("Orders done");
const notifications = Promise.resolve("Notifications loaded");

Promise.all([user, orders, notifications])
.then(results => {
  const [userResults, orderResults, notificationsResults] = results;
  console.log("Results", userResults, orderResults, notificationsResults);
}).catch(error => {
  console.error("Something went wrong:", error)
});
