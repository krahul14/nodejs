const express = require("express")
const {
  handleDeleteUserById,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleCreateNewUser,
} = require("../controllers/user")

const router = express.Router()

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById)

module.exports = router
