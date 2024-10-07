const express = require("express")
const urlRoute = require("./routes/url")
const path = require("path")
const { connectToMongoDB } = require("./connect")
const URL = require("./models/url")
const staticRouter = require("./routes/staticRouter")
const app = express()
const PORT = 8001

connectToMongoDB("mongodb://localhost:27017/url-shortner").then(() =>
  console.log("Connected to MongoDB")
)

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/url", urlRoute)
app.use("/", staticRouter)
app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  )
  res.redirect(entry.redirectUrl)
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
