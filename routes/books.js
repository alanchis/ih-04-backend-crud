const express = require('express')
const router			= express.Router()

const bookController	= require("./../controllers/bookController")


//obtener libros
router.get("/", bookController.getBooks)


//crear pagina para crear un libros en base de DATOS
router.get("/create", bookController.createBooks)

module.exports = router


