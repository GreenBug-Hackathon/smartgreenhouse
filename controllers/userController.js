import { generateToken } from "../middleware/auth.js";
import  User from "../models/userModel.js";

export const updateProfile = async (req, res) => {
  const { name, surname, email } = req.body;

  try {
    // Find the user by id (assuming you have a User model)
    const user = await User.findById(req.user._id);

    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    user.name = name;
    user.surname = surname;
    user.email = email;
    // Save the updated user
    await user.save();

    res.status(200).send(
        {
            _id: user._id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            status: user.status,
            access_token: generateToken(user),
        }
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).send({ message: error });
  }
};

export const detailsUser = async (req, res) => {
  res.send(req.user);
};
