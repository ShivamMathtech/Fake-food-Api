const order = (req, res) => {
  let Name = ["Salad", "Sandwich", "Pizza", "burger", "Coffee"];
  let paide = ["wallet", "online", "cash"];
  let orderfile = [];
  if (Math.random() > 0.5 ? true : false) {
    for (let i = 0; i < 20; i++) {
      orderfile.push({
        order_id: Math.floor(Math.random() * 10000),
        arrives_at_utc: new Date().getTime(),
        paide_with: paide[Math.floor(Math.random() * paide.length)],
        item: Name[Math.floor(Math.random() * Name.length)],
        quantity: Math.floor(Math.random() * 10) + 1,
        price: (Math.random() * (99 - 10) + 10).toFixed(2),
      });
      order.total += orderfile[i].price * orderfile[i].quantity;
    }
    res.status(200).json({
      orders: orderfile,
    });
  } else {
    res.status(503).json({
      error: "No orders generated",
    });
  }
};

module.exports = {
  order,
};
