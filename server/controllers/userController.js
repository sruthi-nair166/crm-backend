const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    phone,
    isCustomer: false,
  });

  res.json(user);
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};

// Create
exports.createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const user = await User.create({
      name,
      email,
      phone,
      isCustomer: true,
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Read
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({ isCustomer: true });
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Update

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
};

// Delete
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
