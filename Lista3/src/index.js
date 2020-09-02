const express = require('express');
const { Fornecedor } = require('./models/modelFornecedor');

const app = express();

const port = 3001;

app.use(express.json());

app.get('/', async (request, response) => {
  const itens = await Fornecedor.findAll({
    atributes: ['nome_fornecedor', 'cnpj', 'contato']
  })
  return response.status(200).json(itens)
});

app.post('/', async (request, response) => {
  const data = request.body;
  const item = await Fornecedor.create(data);
  return response.status(200).json(item);
});

app.patch('/:id', async (request, response) => {
  const item = await Fornecedor.update(request.body, {
    where: {
      idfornecedor: request.params.id
    }
  })
  return response.status(200).json(item);
});

app.delete('/:id', async (request, response) => {
  const item = await Fornecedor.destroy({
    where: {
      idfornecedor: request.params.id
    }
  })
  return response.status(200).json(item)
});

app.listen(port, () => console.log('Servidor iniciado!'));