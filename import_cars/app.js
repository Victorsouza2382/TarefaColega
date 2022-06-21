(async () => {
  const database = require('./db/conn');
  const cliente = require('./models/clienteModel');
  const veiculo = require('./models/veiculoModel');
  try {
      const resultado = await database.sync({force:true});
  } catch (error) {
      console.log(error);
  }
})();


const clienteRoutes = require('./routes/clienteRoute')
const veiculoRoutes = require('./routes/veiculoRoute')

const express = require('express');
const app = express();
app.use(express.static('public'))
const {
  engine
} = require('express-handlebars');
const {
  json
} = require('../node_modules/express/lib/response');
const res = require('../node_modules/express/lib/response');

// //config 
//   //template engine
app.engine('handlebars', engine({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json())

app.use('/static', express.static(__dirname + '/public'))
// app.use(json())

app.use('/clienteRoutes', clienteRoutes)
app.use('/veiculoRoutes', veiculoRoutes)

// app.get('/', function (req, res) {
//   res.render('bem/pesquisa')
// })
app.listen(3000, async () => {
  console.log("Aplicação rodando na porta http://localhost:3000")
});

module.exports = app