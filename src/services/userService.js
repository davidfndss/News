const User = require("../models/User.js")

const createService = (body) => {
  return User.create(body)
}

const findAllService = () => {
  return User.find()
}

const findByIdService = (id) => {
  return User.findById(id)
}

const updateService = (id, name, username, email, password, avatar, background) => {
   return User.findOneAndUpdate({ _id: id },{ name, username, email, password, avatar, background }).then(() => console.log("Usuário editado com sucesso!")).catch(( err ) => { console.error("ERRO: ", err)})
}

const deleteByIdService = ( id ) => {
  return User.findByIdAndDelete(id).then(( ) => console.log("usuário removido")).catch((err) => console.error("ocorreu um erro, ao excluir usuário ", err))
}

module.exports = {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteByIdService
}