import readlinesync = require("readline-sync")

export function main() {

   
    // Variaveis auxiliares
    let opcao: number
    

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
        console.log("            4 - Atualizar Produtos             ")
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
                keyPress()
                break
            
            case 2:
                console.log("\n\nListar Produtos\n\n")
                keyPress()
                break
            
            case 3:
                console.log("\n\nBuscar Produtos\n\n")
                keyPress()
                break
            
            case 4:
                console.log("\n\nAtualizar Produto\n\n")
                keyPress()
                break
                
            case 5:
                console.log("\n\nDeletar Produto\n\n")
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