const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

// @desc Register a User
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body
  if (!userName || !email || !password) {
    res.status(400)
    throw new Error("Please fill in all fields")
  }
  const userAvailable = await User.findOne({ email })
  if (userAvailable) {
    res.status(400)
    throw new Error("User already exists")
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10)
  console.log("Hashed Password", hashedPassword)

  const user = await User.create({ userName, email, password: hashedPassword })
  console.log("User", user)
  if (user) {
    res.status(201).json({
      _id: user._id,
      //   userName: user.userName,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
  res.json({ message: "Register route" })
})

// @desc Login a User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login route" })
})

// @desc View current User
// @route GET /api/users/current
// @access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User route" })
})

module.exports = { registerUser, loginUser, currentUser }