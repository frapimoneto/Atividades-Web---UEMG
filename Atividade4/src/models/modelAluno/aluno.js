const { Turma } = require('../modelTurma/turma');
module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    idaluno: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    nome: {
      type: DataTypes.STRING,
      require: true
    },

    email: {
      type: DataTypes.STRING,
      require: true
    },

    telefone: {
      type: DataTypes.STRING,
      require: false
    },

    turma_idturma: {
      type: DataTypes.INTEGER,
      foreignKeyConstraint: true,
      require: true,
      references: {
        model: 'Turma',
        key: 'idturma'
      }
    }
  });

  Aluno.hasOne(Turma);

  return Aluno;
}