import mongoose, { Schema, Document } from 'mongoose';


export interface IFornecedor extends Document {
  nome_fornecedor :string;
  climate: string;
  movie_screenings: string;
  terrain: string;
}

const FornecedorSchema: Schema = new Schema({
  nome_fornecedor : { type: String, required: true },
  cnpj: { type: String, required: true },
  contato : { type: String, required: true },
});

export default mongoose.model<IFornecedor>('Fornecedor', FornecedorSchema);