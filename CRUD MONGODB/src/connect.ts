import mongoose from 'mongoose';

type TInput = {
  db: string;
}
export default ({db}: TInput) => {
  
  const connect = () => {
    mongoose
      .connect(
        db,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        return console.info('Conexão bem sucedida');
      })
      .catch(error => {
        console.error('Erro ao conectar ao banco', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
