import User from "../Database/model/user.js";

export const updateUser = async (req,res) => {
  try {
    const userData = new User(req.body);

    const { _id } = req.body;

    const user = await User.find({ _id: _id });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndUpdate(_id, userData, { new: true });

    res.status(200).json({ message: "User Successfully Update" });
  } catch (err) {
    console.log(err);
  }
};
