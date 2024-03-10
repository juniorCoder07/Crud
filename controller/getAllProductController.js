import Product from "../Database/model/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const user = req.userData.id; 
    const productList = await Product.find({user:user});

    if (productList.length===0) {
      return res.status(400).json({ message: "There is no product available" });
    }
   return res.status(200).json(productList);
  } catch (err) {
    console.log(err);
  }
};
