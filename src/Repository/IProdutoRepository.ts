import { Produto } from "../Model/Produto"

export interface IProdutoRepository{

    //CRUD da Loja
    cadastrarProduto(produto: Produto): void
    listarProdutos(): void
    atualizarProduto(nome: string, nome2: string, cor: string, preco: number): void
    deletarProduto(nome: string): void
    procurarProduto(nome:string): void

}