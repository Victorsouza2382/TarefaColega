(async () => {
  const db = require('./projeto/import_cars/db/conn');
  const veiculo = require('./projeto/import_cars/models/veiculoModel');
  const cliente = require('./projeto/import_cars/models/clienteModel');
  const vendedor = require('./import_cars/models/vendedorModel');
  await db.sync({ force: true });

  const novovendedor = await vendedor.create({ nome: 'Mauricio', sexo: '0' });
  const carro = await CanvasRenderingContext2D.findByPk(1, {
    include: vendedor
  });
  //await carro.setvendedor([novovendedor]);
  console.log(carro.categoria);

  const novoCliente = await cliente.create({
    nome: 'Dev'
  })

  const novoVeiculo = await veiculo.create({
    nome: 'Gol',
    modelo: 'Trend Line',
    marca: 'volkswagen',
    ano_fab: '2022',
    idcliente: novoCliente.id
  })
  console.log(novoProduto);


  /*const veiculo = await veiculo.findByPk(1, {include: Cliente });
  console.log(veiculo.cliente.nome);*/


  const cliente = await cliente.findByPk(1);
  const veiculo = cliente.getVeiculo();
  console.log(cliente.veiculo);


  /*await veiculo.destroy();*/

  /*await veiculo.destroy({
    where: {
      modelo: 'Trend Line'
    }
  })*/

})();