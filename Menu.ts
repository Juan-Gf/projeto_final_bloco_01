import readlinesync = require("readline-sync")
import { Produto } from "./src/Model/Produto"
import { ProdutoController } from "./src/Controller/ProdutoController"
import { Patins } from "./src/Model/Patins"

export function main() {

   
    // Variaveis auxiliares
    let nome, nome2, cor, modelo: string
    let opcao, tamanho, quantRodas, preco: number
    
    let produto: ProdutoController = new ProdutoController()


    // Teste alimentar o estoque

    let pt1: Patins = new Patins("Revolt", "Preto", "XT67", 39, 4, 899.99)
    produto.cadastrarProduto(pt1)
    let pt2: Patins = new Patins("Samba", "Branco", "CKL", 30, 3, 599.99)
    produto.cadastrarProduto(pt2)
    let pt3: Patins = new Patins("Revo", "Lilas", "85UH", 36, 2, 799.99)
    produto.cadastrarProduto(pt3)
    let pt4: Patins = new Patins("Riban", "Rosa", "PL58", 35, 4, 999.99)
    produto.cadastrarProduto(pt4)
    
    while (true) {

        console.log(
                    "*****************************************************")
        console.log("                                                     ")
        console.log("                Loja de Patins - ZY               ")
        console.log("                                                     ")
        console.log("  *****************************************************")
        console.log("                                                     ")
        console.log("            1 - Cadastrar Produto                          ")
        console.log("            2 - Listar Produtos               ")
        console.log("            3 - Buscar Produtos              ")
        console.log("            4 - Atualizar Nome do Produtos             ")
        console.log("            5 - Deletar Produto                         ")
        console.log("            6 - Sair                                 ")
        console.log("                                                     ")
        console.log("  *****************************************************")
        console.log("                                                     ")

        console.log("Entre com a opção desejada: ")
        opcao = readlinesync.questionInt("")

        if (opcao == 6) {
            console.log("\nObrigado por visitar nossa Loja!")
            sobre()
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n")

                console.log("Digite o Nome do produto: ")
                nome = readlinesync.question("")

                console.log("Digite a cor do produto: ")
                cor = readlinesync.question("")

                console.log("Digite o modelo do produto: ")
                modelo = readlinesync.question("")

                console.log("Digite o tamanho do produto: ")
                tamanho = readlinesync.questionInt("")

                console.log("Digite a quantidade de rodas: ")
                quantRodas = readlinesync.questionInt("")

                console.log("Digite o preço do produto: ")
                preco = readlinesync.questionFloat("")

                produto.cadastrarProduto(new Patins(nome, cor, modelo, tamanho, quantRodas,preco))

                keyPress()
                break
            
            case 2:
                console.log("\n\nListar Produtos\n\n")
                produto.listarProdutos()
                keyPress()
                break
            
            case 3:
                console.log("\n\nBuscar Produtos\n\n")
                keyPress()
                break
            
            case 4:
                console.log("\n\nAtualizar Nome do Produto\n\n")
                
                console.log("Digite o nome do produto: ")
                nome = readlinesync.question("")

                console.log("Digite o Novo nome do produto: ")
                nome2 = readlinesync.question("")

                produto.atualizarProduto(nome, nome2)
                
                
                
                keyPress()
                break
                
            case 5:
                console.log("\n\nDeletar Produto\n\n")
                
                console.log("Digite o Nome do produto: ")
                nome = readlinesync.question("")

                produto.deletarProduto(nome)
                
                keyPress()
                break
             }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************")
    console.log("Projeto Desenvolvido por: Juan G. Ferreira ")
    console.log("Generation Brasil - generation@generation.org")
    console.log("github.com/conteudoGeneration")
    console.log("*****************************************************")
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt()
}

main()