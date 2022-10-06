import Order from "../../models/Order";
import connectDB from "../../middleware/connectDB";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let p = new Order({
      email:req.body.email,
      orderID: req.body.id,
      products: req.body.products,
      address: req.body.address,
      amount:req.body.subTotal,
      payment_status: req.body.pay_status,
    });
    await p.save();

    res.status(200).json({ sucess: "success" });
  } else {
    res.status(400).json({ error: "error" });
  }
};

export default connectDB(handler);
