const express = require("express")
const userRoute = require("./routes/userRoute")
const app = express()
require('dotenv').config()

// Config
  // Database
  const { connectDatabase } = require("./database/db.js")
  connectDatabase()
  // Express
  app.use(express.json()) //this allows the api to send and receive json files
  app.use(express.urlencoded({ extended: true }));
  // Routes
  app.use("/user", userRoute)
  

const port = process.env.PORT || 3000
app.listen(port)