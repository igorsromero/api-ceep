const { Router } = require('express')
const NotasController = require("../controllers/NotaController");

const router = Router()

router.get("/notas", NotasController.pegaTodasAsNotas);

router.post("/notas", NotasController.criarNovaNota);

module.exports = router