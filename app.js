const express = require("express");
const app = express();
const connectDB = require("./configs/database");
const router = require("./routers");

app.use(express.json());
connectDB();
router(app);

app.listen(9011, () => {
  console.log("Server run at port" + 9011);
});
