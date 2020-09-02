const express = require('express');
const { Aluno } = require('./models/modelAluno');
const { Turma } = require('./models/modelTurma');

const app = express();

const port = 3001;

app.use(express.json());

app.get('/aluno', async (request, response) => {
  try {
    const itens = await Aluno.findAll({
      atributes: ['nome', 'email', 'telefone']
    })
    return response.status(200).json(itens)
  } catch (err) {
    console.log(err);
  }
});

app.post('/aluno', async (request, response) => {
  try {
    const data = request.body;
    const item = await Aluno.create(data);
    return response.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
});

app.patch('/aluno/:id', async (request, response) => {
  try {
    const item = await Aluno.update(request.body, {
      where: {
        idaluno: request.params.id
      }
    })
    return response.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
});

app.delete('/aluno/:id', async (request, response) => {
  try {
    const item = await Aluno.destroy({
      where: {
        idaluno: request.params.id
      }
    })
    return response.status(200).json(item)
  } catch (err) {
    console.log(err);
  }

});


app.get('/turma', async (request, response) => {
  try {
    const itens = await Turma.findAll({
      atributes: ['nome_turma']
    })
    return response.status(200).json(itens)
  } catch (err) {
    console.log(err);
  }
});

app.post('/turma', async (request, response) => {
  try {
    const data = request.body;
    const item = await Turma.create(data);
    return response.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
});

app.patch('/turma/:id', async (request, response) => {
  try {
    const item = await Turma.update(request.body, {
      where: {
        idturma: request.params.id
      }
    })
    return response.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
});

app.delete('/turma/:id', async (request, response) => {
  try {
    const item = await Turma.destroy({
      where: {
        idturma: request.params.id
      }
    })
    return response.status(200).json(item)
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => console.log('Servidor iniciado!'));