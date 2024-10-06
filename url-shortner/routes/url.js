const express = require("express")
const { handleGenerateNewShorlURL, handleGetAnalytics } = require("../controllers/url")
const router = express.Router()

router.post("/", handleGenerateNewShorlURL)
router.get("/analytics/:shortId", handleGetAnalytics)
module.exports = router
