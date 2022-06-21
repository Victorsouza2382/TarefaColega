const {
  Sequelize
} = require('sequelize')
const Veiculo = require('../models/veiculoModel')
module.exports = class veiculoController {
  static createveiculo(req, res) {
    res.render('veiculo/create')
  }
  static createveiculoSave(req, res) {
    const veiculo = {
      nome: req.body.nome,
      modelo: req.body.modelo,
      marca: req.body.marca,
      ano_fab: req.body.ano_fab,
      status: false,
    }
    Veiculo.create(veiculo)
      .then((data) => {
        let emptyveiculos = false
        res.redirect('/veiculoRoutes/show')
      
  })}
  static removeveiculo(req, res) {
    const id = req.body.id
    Veiculo.destroy({
        where: {
          id: id
        }
      })
      .then(res.redirect('/veiculoRoutes/show'))
      .catch((err) => console.log(err))
  }
  static showveiculos(req, res) {
    Veiculo.findAll({
        raw: true
      })
      .then((data) => {
        let emptyveiculos = false
        if (data.length != null) {
          if (data.length === 0) {
            emptyveiculos = true
          }
        }
        res.render('veiculo/all', {
        veiculo: data,
        emptyveiculos
        })
      })
      .catch((err) => console.log(err))
  }

  static showOne(req, res) {
    const id = req.body.id
    Veiculo.findOne({
        where: {
          id: id
        },
        raw: true
      })
      .then((data) => {
        res.render('veiculo/edit', {
          veiculo: data
        })
      })
      .catch((err) => console.log())
  }
  static updateveiculo(req, res) {
    const id = req.body.id
    const veiculo = {
      nome: req.body.nome,
      modelo: req.body.modelo,
      marca: req.body.marca,
      ano_fab: req.body.ano_fab,
      status: false,
    }
    Veiculo.update(veiculo, {
        where: {
          id: id
       }
       }).then((data) => {
            let emptyveiculos = false
            if (data.length != null) {
              if (data.length === 0) {
                emptyveiculos = true
              }
            }
            res.redirect('/veiculoRoutes/show')
            // res.render('veiculo/all', {
            //   bem: data,
            //   emptyveiculos
            // })
          })
          .catch((err) => console.log(err)) }

          static showPesquisa(req, res) {
            const id = req.body.id
            let emptyveiculos = true
            Veiculo.findOne({
                where: {
                  id: id
                },
                raw: true
              })
              .then((data) => {
                if(data){
                emptyveiculos = false
                }
                res.render('veiculo/result', {
                  veiculo: data, emptyveiculos
                })
              })
              .catch((err) => console.log())
          }

      }

        