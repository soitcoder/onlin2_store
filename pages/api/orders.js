import Order from "../../models/Order";
import connectDB from "../../middleware/connectDB";
var jwt = require('jsonwebtoken');
require("dotenv").config();

const handler = async (req, res) => {
  const token = req.body.token;
  const data = jwt.verify(token, process.env.JWT_SECRET);
  let orders = await Order.find({ email: data.email }).sort({createdAt:-1});
  res.status(200).json({ orders})
};

export default connectDB(handler);
