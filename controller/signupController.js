import User from "../Database/model/user.js";
import { genHashPassword } from "../utils/genHashPassword.js";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "User already exist." });
    }

    //HASHING PASSWOORD
    const hashPassword = await genHashPassword(password);

    await new User({
      ...req.body,
      password: hashPassword,
    }).save();

    return res.status(200).json({ message: "Signup Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error. " });
  }
};
