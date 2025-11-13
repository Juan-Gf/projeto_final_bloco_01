import { Produto } from "../Model/Produto"

export interface IProdutoRepository{

    //CRUD da Loja
    cadastrarProduto(produto: Produto): void
    listarProdutos(): void
    atualizarProduto(nome: string, nome2: string): void
    deletarProduto(nome: string): void
    procurarProduto(numero: number): void

}