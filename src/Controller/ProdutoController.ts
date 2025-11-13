import { promises } from "dns";
import { Patins } from "../Model/Patins";
import { Produto } from "../Model/Produto";
import { IProdutoRepository } from "../Repository/IProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements IProdutoRepository{

    private estoqueProdutos: Array<Produto> = new Array<Produto>()


    cadastrarProduto(produto: Produto): void {
        this.estoqueProdutos.push(produto)
        console.clear()
        console.log(colors.fg.greenstrong, "Produto cadastrado com sucesso!", colors.reset)
    }

    listarProdutos(): void {
        for(let produto of this.estoqueProdutos){
            produto.visualizar()
        }
    }

    atualizarProduto(nome: string, nome2: string, cor: string, preco: number): void {
        let buscaPatins = this.buscarNoArray(nome)

        if(buscaPatins != null){
            let index = this.estoqueProdutos.indexOf(buscaPatins, 1)
            buscaPatins.nome = nome2
            buscaPatins.cor = cor
            buscaPatins.preco = preco
            console.log("Produto atualizado com sucesso!")
        }else
            console.log(colors.fg.redstrong,"Produto Não encontrado",colors.reset)
    }

    deletarProduto(nome: string): void {
        let buscaPatins = this.buscarNoArray(nome)
        
        if(buscaPatins != null){
            this.estoqueProdutos.splice(this.estoqueProdutos.indexOf(buscaPatins), 1)
            console.log("Produto Excluido com sucesso")
        
        }else
            console.log(colors.fg.redstrong,"Produto Não encontrado",colors.reset)
    
    }


    procurarProduto(nome: string): void {
        let buscaPatins = this.buscarNoArray(nome)
        
        if(buscaPatins != null){
            buscaPatins.visualizar()
            
        }else
            console.log(colors.fg.redstrong,"Produto Não encontrado",colors.reset)
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