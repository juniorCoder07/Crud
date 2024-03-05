import User from "../Database/model/user.js";
import jwt from "jsonwebtoken"
const SECRET_key="dfsjhdjhsdjhajkdhjash"
export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    

    const { email } = req.body;
    const userExist = await User.findOne({email})
    if (userExist) {
      return res.status(400).json({ message: "User already exist." });
    }
    const savedUser = await userData.save();
    const token=jwt.sign({email:savedUser.email,id:savedUser._id},SECRET_key)
    res.status(200).json({user:savedUser,token:token});
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
