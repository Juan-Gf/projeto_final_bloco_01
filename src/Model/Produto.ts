export abstract class Produto {

    private _nome: string
    private _cor: string
    

    constructor(nome: string, cor: string){
        this._nome = nome
        this._cor = cor
    
    }

    public get nome() {
        return this._nome
    }

    public set nome(nome: string) {
        this._nome = nome
    }

   

    public get cor() {
        return this._cor
    }

    public set cor(cor: string){
        this._cor = cor
    }
    
    public visualizar(): void {


        console.log("\n\n*****************************************************")
        console.log("Produto")
        console.log("*****************************************************")
        console.log("Nome: " + this._nome)
        console.log("Cor: " + this._cor)


    }

}