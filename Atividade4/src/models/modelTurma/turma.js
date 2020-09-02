module.exports = (sequelize, DataTypes) => {
  const Turma = sequelize.define('Turma', {
    idturma: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    nome_turma: {
      type: DataTypes.STRING,
      require: true
    },
  })

  return Turma;
}