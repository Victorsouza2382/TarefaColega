const express = require('express')
const router = express.Router();
const veiculoController = require('../controllers/veiculoController')
router.get('/cadastro', veiculoController.createveiculo)
router.post('/add', veiculoController.createveiculoSave)
router.post('/edit', veiculoController.showOne)
router.post('/edit/update', veiculoController.updateveiculo)
router.get('/show', veiculoController.showveiculos)
router.post('/delete', veiculoController.removeveiculo)
router.post('/pesquisa', veiculoController.showPesquisa)

router.get('/', function(req,res){
    res.render("veiculo/pesquisa")
  })  
  
module.exports = router