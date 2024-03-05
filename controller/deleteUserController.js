import User from "../Database/model/user.js";

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.body;

    const user = await User.find({ _id: _id });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(_id);
    res.status(200).json({ message: "User delete Succesfully" });
  } catch (err) {
    console.log(err);
  }
};
