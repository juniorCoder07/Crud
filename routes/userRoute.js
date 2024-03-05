import express from "express";

import { createUser } from "../controller/addUserController.js";
import { getAllUser } from "../controller/getAllUserController.js";
import { updateUser } from "../controller/updateUserController.js";
import { deleteUser } from "../controller/deleteUserController.js";
import { signin } from "../controller/userAuthController.js";
import { auth } from "../middleware/auth.js";

const route = express.Router();
route.post("/createuser", createUser);
route.get("/getusers", auth, getAllUser);
route.put("/updateuser", updateUser);
route.delete("/userdelete", deleteUser);
route.post("/login", signin);

export default route;
