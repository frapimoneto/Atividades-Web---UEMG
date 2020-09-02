module.exports = (sequelize, DataTypes) => {
  const Fornecedor = sequelize.define('Fornecedor', {
    idfornecedor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    nome_fornecedor: {
      type: DataTypes.STRING,
      require: true
    },

    cnpj: {
      type: DataTypes.STRING,
      require: true
    },

    contato: {
      type: DataTypes.STRING,
      require: false
    }
  })

  return Fornecedor;
}