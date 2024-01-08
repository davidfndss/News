const userService = require("../services/userService.js")
const mongoose = require("mongoose")

const create = async ( req, res ) => {
  const {name, username, email, password, avatar, background} = req.body

  if(!name || !username || !email || !password || !avatar || !background){
    return res.status(400).send({message: "Preencha todos os campos para efetuar o registro"})
  }

  const user = await userService.createService(req.body)

  if(!user){
    return res.status(400).send({message: "Ocorreu um erro ao criar usuário"})
  }

  res.status(201).send({
    message: 
      "usuário registrado com sucesso",     
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background
    }
  })
}

const findAll = async ( req,res ) => { // finds all users on database and returns an array
  const users = await userService.findAllService()

  if(users.length == 0){
    return res.status(400).send({ message: "Não existe usuários cadastrados" })
  }

  res.send(users)
}

const findById = async ( req,res ) => {
  const id = req.id
  const user = req.user
  res.send(user)
}

const update = async ( req,res ) => {
  const {name, username, email, password, avatar, background} = req.body

  if(!name && !username && !email && !password && !avatar && !background){
    res.status(400).send({message: "Preencha pelo menos um campo para atualizar o cadastro"})
  }

  const id = req.id
  
  await userService.updateService(id, name, username, email, password, avatar, background)

  res.send({message: "Usuário atualizado com sucesso"})
}

const deleteById = async ( req, res ) => {
  const id = req.params.id
  await userService.deleteByIdService(id)
  res.send({message: "Usuário removido com sucesso"})
}

module.exports = { create, findAll, findById, update, deleteById }