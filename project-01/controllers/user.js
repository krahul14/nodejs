const User = require("../models/user")

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({})
  // res.setHeader("X-MyName", "Rahul") // custom header
  return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ message: "User not found" })
  }
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { firstName: "Shruti" })
  return res.json({ message: "User updated" })
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id)
  return res.json({ message: "User deleted" })
}

async function handleCreateNewUser(req, res) {
  const newUser = req.body
  if (
    !newUser ||
    !newUser.first_name ||
    !newUser.last_name ||
    !newUser.email ||
    !newUser.gender ||
    !newUser.job_title
  ) {
    return res
      .status(400)
      .json({ message: "Bad Request. Please provide all the required fields." })
  }
  const result = await User.create({
    firstName: newUser.first_name,
    lastName: newUser.last_name,
    email: newUser.email,
    gender: newUser.gender,
    jobTitle: newUser.job_title,
  })

  return res.status(201).json({ message: "User created" })
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
}
