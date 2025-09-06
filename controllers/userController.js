const User = require("../models/user");

// @desc    Get all users
// @route   GET /api/users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// @desc    Add new user
// @route   POST /api/users
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getUsers, createUser };
