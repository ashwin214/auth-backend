const UserModel = require("../Models/User");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      firstName,
      lastName,
      email: email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
      success: false,
    });
  }
};

module.exports = { signup };
