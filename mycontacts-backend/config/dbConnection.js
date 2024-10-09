const mongoose = require("mongoose")

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("Database connected successfully", connect.connection.host, connect.connection.name)
  } catch (error) {
    console.log("Error connecting to database", error)
    process.exit(1)
  }
}

module.exports = dbConnection
