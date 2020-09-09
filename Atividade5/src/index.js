const express = require('express');
const { Login } = require('./models/modelLogin');
const app = express();

const port = 3001;

app.use(express.json());

app.get('/login', async (request, response) => {
  try {
    const itens = await Login.findAll({
      atributes: ['login', 'nome', 'sobrenome', 'senha']
    })
    return response.status(200).json(itens)
  } catch (err) {
    console.log(err);
  }
});

app.post('/login', async (request, response) => {
  try {
    const data = request.body;
    const item = await Login.create(data);
    return response.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
});

app.post('/realizarlogin', async (request, response) => {
  if (request.body.login && request.body.senha) {
    var login = request.body.login;
    var senha = request.body.senha;
    const user = await Login.findOne({
      where: {
        login: login,
      }
    });

    if (senha === user.senha) {
      response.status(200)
      response.json({
        message: "OK",
      })
    }else {
      response.status(401)
      response.json({
        message: "Não autorizado",
      })
    }
  } else {
    response.status(400)
      response.json({
        message: "Erro!",
      })
  }
});

app.post("/api/login", async (req, res) => {
  if (req.body.email && req.body.senha) {
    var email = req.body.email;
    var senha = req.body.senha;
    const user = await Petshop.findOne({
      where: {
        email: email,
      }
    })
    if (bcrypt.compareSync(senha, user.senha)) {
      var payload = {
        id: user.id,
        nome: user.nome
      };
      var token = jwt.encode(payload, 'X2,Sa^Dwje2yacGS1MeB<PFR%Uk<iu');
      var usuario = user.nome
      res.json({
        sucess: true,
        token: token,
        usuario: usuario
      })
    } else {
      res.status(401)
      res.json({
        sucess: false,
      })
    }
  } else {
    //console.log("erro")
    res.status(401)
  }
})

app.patch('/login/:id', async (request, response) => {
  try {
    const item = await Login.update(request.body, {
      where: {
        idlogin: request.params.id
      }
    })
    return response.status(200).json(item);
  } catch (err) {
    console.log(err);
  }
});

app.delete('/login/:id', async (request, response) => {
  try {
    const item = await Login.destroy({
      where: {
        idlogin: request.params.id
      }
    })
    return response.status(200).json(item)
  } catch (err) {
    console.log(err);
  }

});

app.listen(port, () => console.log('Servidor iniciado!'));