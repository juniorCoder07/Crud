import Product from "../Database/model/product.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, date } = req.body;
    const user = req.userData.id;

    const product = new Product({ name, price, date, user });
    await product.save();
    return res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error. " });
  }
};
