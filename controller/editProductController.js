import Product from "../Database/model/product.js";

export const editProduct = async (req, res) => {
  try {
    const { _id } = req.body;

    const product = await Product.findOne({ _id });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const result = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json({ message: "Product Successfully Updated", product: result });
  } catch (err) {
    console.log(err);
  }
};
