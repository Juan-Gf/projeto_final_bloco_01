import { promises } from "dns";
import { Patins } from "../Model/Patins";
import { Produto } from "../Model/Produto";
import { IProdutoRepository } from "../Repository/IProdutoRepository";

export class ProdutoController implements IProdutoRepository{

    private estoqueProdutos: Array<Produto> = new Array<Produto>()


    cadastrarProduto(produto: Produto): void {
        this.estoqueProdutos.push(produto)
        console.log("Produto cadastrado com sucesso!")
    }

    listarProdutos(): void {
        for(let produto of this.estoqueProdutos){
            produto.visualizar()
        }
    }

    atualizarProduto(nome: string, nome2: string): void {
        let buscaPatins = this.buscarNoArray(nome)
        
        if(buscaPatins != null){
            let index = this.estoqueProdutos.indexOf(buscaPatins, 1)
            buscaPatins.nome = nome2
            console.log("Nome atualizado com sucesso!")
        }else
            console.log("Produto Não encontrado")
    }

    deletarProduto(nome: string): void {
        let buscaPatins = this.buscarNoArray(nome)

        if(buscaPatins != null){
            this.estoqueProdutos.splice(this.estoqueProdutos.indexOf(buscaPatins), 1)
            console.log("Produto Excluido com sucesso")
        
        }else
            console.log("Produto Não encontrado")
    
    }


    procurarProduto(numero: number): void {
        
    }

     // Checa se uma conta existe
    public buscarNoArray(nome: string): Produto | null {    
        for(let produto of this.estoqueProdutos){
            
            if(produto.nome === nome)
               return produto
        }
         return null
    }

}