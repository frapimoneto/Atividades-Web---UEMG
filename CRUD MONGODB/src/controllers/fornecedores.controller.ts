import Fornecedor, { IFornecedor } from '../models/fornecedor.model';

interface CreateFornecedorInput {
  nome_fornecedor: IFornecedor['nome_fornecedor'];
  cnpj: IFornecedor['cnpj'];
  contato: IFornecedor['contato'];
}

async function CreateFornecedor({ nome_fornecedor, cnpj, contato }: CreateFornecedorInput): Promise<IFornecedor> {
  return await Fornecedor.create({
    nome_fornecedor,
    cnpj,
    contato,
  })
    .then((data: IFornecedor) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function ListFornecedores() {
  try {
    return await Fornecedor.find();
  } catch (error) {
    return error;
  }
};

async function ListFornecedorId(id: string) {
  try {
    return await Fornecedor.findById(id);
  } catch (error) {
    return error;
  }
};

async function ListFornecedorName(nome_fornecedor: string) {
  try {
    return await Fornecedor.findOne({nome_fornecedor: nome_fornecedor});
  } catch (error) {
    return error;
  }
};

async function DeleteFornecedor(id: string) {
  try {
    return await Fornecedor.findByIdAndRemove(id);
  } catch (error) {
    return error;
  }
};


export default {
  CreateFornecedor,
  ListFornecedores,
  ListFornecedorId,
  ListFornecedorName,
  DeleteFornecedor
};
