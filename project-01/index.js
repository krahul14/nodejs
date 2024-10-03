const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000

// Middleware
app.use(express.urlencoded({ extended: false }))
// Routes

app.get("/", (req, res) => {
  const html = `
    <h1>List of Users</h1>
    <ol>
    ${users
      .map((user) => `<li>${user.first_name} ${user.last_name}</li>`)
      .join("")}
    </ol>`
  res.send(html)
}),
  app.get("/api/users", (req, res) => {
    res.json(users)
  })
app.post("/api/users", (req, res) => {
  // TODO - Create user
  const newUser = req.body
  users.push({...newUser, id: users.length + 1})
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json("{New user added successfully with id: " + (users.length) + "}")
  })
  
})

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id
    const user = users.find((user) => user.id === +id)
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  })
  .patch((req, res) => {
    // TODO - Update user
    return res.json("status: 501 Not Implemented")
  })
  .delete((req, res) => {
    // TODO - Delete user
    return res.json("status: 501 Not Implemented")
  })
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
