import { TRoutesInput } from '../types/routes';
import { Request, Response } from 'express';
import FornecedorController from '../controllers/fornecedores.controller';

export default ({ app }: TRoutesInput) => {
  app.post('/api/fornecedores', async (request: Request, response: Response) => {
    const fornecedor = await FornecedorController.CreateFornecedor({
      nome_fornecedor: request.body.nome_fornecedor,
      cnpj: request.body.cnpj,
      contato: request.body.contato,
    });

    return response.send(fornecedor);
  });

  app.get('/api/fornecedores', async ( request: Request, response: Response) => {
    const fornecedor = await FornecedorController.ListFornecedores();
    return response.send(fornecedor);
  });

  app.get('/api/fornecedores/:id', async ( request: Request, response: Response) => {
    const fornecedor = await FornecedorController.ListFornecedorId(request.params.id);
    return response.send(fornecedor);
  });

  app.delete('/api/fornecedores/:id', async ( request: Request, response: Response) => {
    const fornecedor = await FornecedorController.DeleteFornecedor(request.params.id);
    return response.status(200).send('1');
  });
};
