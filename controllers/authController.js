import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/auth.js";
import User from "../models/userModel.js";

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          status: user.status,
          access_token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const register = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      status: "Admin",
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      access_token: generateToken(createdUser),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
