const router = require("express").Router()
const userController = require("../controllers/userController.js") 

// Middlewares
  const { validId, validUser } = require("../middlewares/globalMiddlewares.js")

router.post("/", userController.create) //Create user
router.get("/", userController.findAll) //Return an Array with all Users found on database
router.get("/:id", validId, validUser, userController.findById) //Return the user with the _id corresponding to the :id param
router.patch("/:id", validUser, validId, userController.update) //Updates some fields of the user if approved on validation
router.delete("/:id", validUser, validId, userController.deleteById) //Deletes the user by the id

module.exports = router