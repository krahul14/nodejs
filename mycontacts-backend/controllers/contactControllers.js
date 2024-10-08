const asyncHandler = require("express-async-handler")
// @desc Get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" })
})

// @desc Get contact by id
// @route GET /api/contacts:id
// @access Public

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` })
})
// @desc create new contacts
// @route POST /api/contacts
// @access Public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body)
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    res.status(400)
    throw new Error("Please fill in all fields")
  }
  res.status(201).json({ message: "Create new  contacts" })
})

// @desc update a contact
// @route PUT /api/contacts:id
// @access Public

const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` })
})

// @desc delete contact
// @route DELETE /api/contacts:id
// @access Public

const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id}` })
})

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
}
