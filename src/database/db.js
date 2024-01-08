const mongoDB = require("mongodb")
const mongoose = require("mongoose")
const uri = process.env.DB_URI

  
const connectDatabase = () => {
  console.log("Conectando com o banco de dados, aguarde...")
  
  mongoose.connect(uri)
    .then(() => {
    console.log("conectado ao MongoDB Atlas com sucesso!")
    })
    .catch(err => {
    console.error(err)
    })
}

module.exports = { connectDatabase }