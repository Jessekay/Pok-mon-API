const user = Promise.resolve("User loaded");
const orders = Promise.resolve("Orders done");
const notifications = Promise.resolve("Notifications loaded");

Promise.allSettled([user, orders, notifications])
.then(results => {
  const labels = ["user", "orders", "notifications"];
  console.log("Dashboard data:");
  results.forEach((results, index) =>{
    console.log(`${labels[index]}: ${results.value}`);
  })
});

console.log("Failed requests:");
results.forEach((results, index) => {
  if (result.status === "rejected") {
    console.log(`${labels[index]}: ${results.reason}`);
  }
})