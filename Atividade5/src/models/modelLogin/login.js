module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('Login', {
    idlogin: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    login: {
      type: DataTypes.STRING,
      require: true
    },

    senha: {
      type: DataTypes.STRING,
      require: true
    },

    nome: {
      type: DataTypes.STRING,
    },

    sobrenome: {
      type: DataTypes.STRING,
    },
  })

  return Login;
}