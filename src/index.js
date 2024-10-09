const express = require("express");
const testRoute = require("./Routes/test/testRoute");
const app = express();
require("dotenv").config();

const Port = process.env.PORT || 3000;
app.use("/test", testRoute);
app.listen(Port, () => {
  console.log(`server listening on port ${Port}`);
});
