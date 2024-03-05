import User from "../Database/model/user.js";
const SECRET_key = "dfsjhdjhsdjhajkdhjash";
import jwt from "jsonwebtoken"

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "User not Found." });
    }

    if (userExist.password != password) {
      return res.status(400).json({ message: "Password does not match" });
    }
    const token = jwt.sign(
      { email: userExist.email, id: userExist._id },
      SECRET_key
    );
    res.status(200).json({ user: userExist, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
