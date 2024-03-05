import User from "../Database/model/user.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    if (users.length===0) {
      res.status(400).json({ message: "Users Not Found" });
    }
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};
