import express from "express";
import { signup } from "../controller/signupController.js";
import { signin } from "../controller/signinController.js";
import { addProduct } from "../controller/AddProductController.js";
import auth from "../middleware/auth.js";
import { getAllProducts } from "../controller/getAllProductController.js";
import { editProduct } from "../controller/editProductController.js";
import { deleteProduct } from "../controller/deleteProductController.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/signin", signin);
route.post("/addproduct", auth, addProduct);
route.put("/editproduct", auth, editProduct);
route.post("/deleteproduct", auth, deleteProduct);
route.get("/getallproducts", auth, getAllProducts);

export default route;
