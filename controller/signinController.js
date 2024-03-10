import User from "../Database/model/user.js";

import jwt from "jsonwebtoken"
import { invalidPasswordError } from "../utils/invalidPasswordError.js";

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User not Found." });
    }

    const invalidPassword = await invalidPasswordError(password, userExist);

    if (invalidPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign(
      { email: userExist.email, id: userExist._id },
      process.env.SECRET_KEY
    );
   return  res.status(200).json({ user: userExist, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
