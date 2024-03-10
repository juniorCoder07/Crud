import Product from "../Database/model/product.js";

export const deleteProduct = async (req, res) => {
  try {
    const { _id } = req.body;

    const product = await Product.findOne({ _id: _id });

    if (!product) {
     return  res.status(404).json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(_id);
   return res.status(200).json({ message: "Product Succesfully deleted" });
  } catch (err) {
    console.log(err);
  }
};
