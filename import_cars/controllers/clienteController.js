const {
  Sequelize
} = require('sequelize')
const Cliente = require('../models/clienteModel')
module.exports = class clienteController {
  static createCliente(req, res) {
    res.render('cliente/create')
  }
  static createclienteSave(req, res) {
    const cliente = {
      nome: req.body.nome,
      idade: req.body.idade,
      sexo: req.body.sexo,
      endereco: req.body.endereco,
      status: false,
    }
    Cliente.create(cliente)
      .then((data) => {
        let emptyClientes = false
        res.redirect('/clienteRoutes/show')
      
  })}
  static removeCliente(req, res) {
    const id = req.body.id
    Cliente.destroy({
        where: {
          id: id
        }
      })
      .then(res.redirect('/clienteRoutes/show'))
      .catch((err) => console.log(err))
  }
  static showClientes(req, res) {
    Cliente.findAll({
        raw: true
      })
      .then((data) => {
        let emptyClientes = false
        if (data.length != null) {
          if (data.length === 0) {
            emptyClientes = true
          }
        }
        res.render('cliente/all', {
          cliente: data,
        emptyClientes
        })
      })
      .catch((err) => console.log(err))
  }

  static showOne(req, res) {
    const id = req.body.id
    Cliente.findOne({
        where: {
          id: id
        },
        raw: true
      })
      .then((data) => {
        res.render('cliente/edit', {
          cliente: data
        })
      })
      .catch((err) => console.log())
  }
  static updateCliente(req, res) {
    const id = req.body.id
    const cliente = {
      nome: req.body.nome,
      idade: req.body.idade,
      sexo: req.body.sexo,
      endereco: req.body.endereco,
      status: false,
    }
    Cliente.update(cliente, {
        where: {
          id: id
       }
       }).then((data) => {
            let emptyClientes = false
            if (data.length != null) {
              if (data.length === 0) {
                emptyClientes = true
              }
            }
            res.redirect('/clienteRoutes/show')
            // res.render('cliente/all', {
            //   bem: data,
            //   emptyClientes
            // })
          })
          .catch((err) => console.log(err)) }

          static showPesquisa(req, res) {
            const id = req.body.id
            let emptycliente = true
            Cliente.findOne({
                where: {
                  id: id
                },
                raw: true
              })
              .then((data) => {
                if(data){
                  emptycliente = false
                  }
                res.render('cliente/result', {
                  cliente: data, emptycliente
                })
              })
              .catch((err) => console.log())
          }

        }