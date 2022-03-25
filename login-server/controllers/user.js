import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const JWT_SECRET = `${process.env.JWT_SECRET}`;

export const signIn = async (req, res) => {
  try {
    // Retrieve email and password
    const { email, password } = req.body;
    // Check if user exists
    const user = await UserModel.findOne({ email });
    // If user not found
    if (!user) return res.status(404).json({ message: "User not found" });
    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // If password not valid
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid credentials" });

    // If credentials are valid, sign JWT token
    const token = jwt.sign({ email: email, id: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    // Send token
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server internal error" });
  }
};

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Check if user already exists
    const user = await UserModel.findOne({ email });

    // If user already exists
    if (user) return res.status(400).json({ message: "User already exists" });
    // Else, create create user credentials and sign JWT token
    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign({ email, id: createdUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ user: createdUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server internal error" });
  }
};
