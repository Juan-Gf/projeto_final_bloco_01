import { Produto } from "../Model/Produto"

export interface IProdutoRepository{

    //CRUD da Loja
    cadastrarProduto(produto: Produto): void
    listarProdutos(): void
    atualiarProduto(produto: Produto): void
    deletarProduto(numero: number): void
    procurarProduto(numero: number): void

}