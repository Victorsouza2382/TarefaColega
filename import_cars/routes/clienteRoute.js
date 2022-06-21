const express = require('express')
const router = express.Router();
const clienteController = require('../../import_cars/controllers/clienteController')
router.get('/cadastro', clienteController.createCliente)
router.post('/add', clienteController.createclienteSave)
router.post('/edit', clienteController.showOne)
router.post('/edit/update', clienteController.updateCliente)
router.get('/show', clienteController.showClientes)
router.post('/delete', clienteController.removeCliente)
router.post('/pesquisa', clienteController.showPesquisa)

router.get('/', function(req,res){
    res.render("cliente/pesquisa")
  })  

module.exports = router