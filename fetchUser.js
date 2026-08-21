// **Task:** Using **Promises**, get the following data in order:

// 1. Find a user by ID.
// 2. Get that user’s orders.
// 3. Get the details of the user’s **first order**.

// Use the provided `getUser()`, `getOrders()`, and `getOrderDetails()` functions.


const data = {
  users: [
    { id: 1, name: "Regis" },
    { id: 2, name: "Alice" },
    { id: 3, name: "John" }
  ],

  orders: [
    { id: 101, userId: 1, product: "Laptop", price: 1200 },
    { id: 102, userId: 1, product: "Mouse", price: 25 },
    { id: 103, userId: 2, product: "Phone", price: 800 },
    { id: 104, userId: 2, product: "Headphones", price: 100 },
    { id: 105, userId: 3, product: "Keyboard", price: 70 }
  ]
};


function getUser(id) {
  const user = data.users.find(user => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return Promise.resolve(user);
}

function getOrders(userId) {
  const orders = data.orders.filter(order => order.userId === userId);

  if (orders.length === 0) {
    throw new Error("No orders found");
  }

  return Promise.resolve(orders);
}

function getOrderDetails(orderId) {
  const order = data.orders.find(order => order.id === orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  return Promise.resolve(order);
}

getUser(1)
.then(user => {
  console.log("User found: ",user.id);
  return getOrders(user.id)
})
.then(orders => {
  console.log("Orders found: ", orders)
  const firstOrder = orders[0];
  return getOrderDetails(firstOrder.id)
})
.then(orderDetails => {
  console.log("Here are the order details :", orderDetails);
}).catch(error => {
  console.log("Something went wrong", error);
})

