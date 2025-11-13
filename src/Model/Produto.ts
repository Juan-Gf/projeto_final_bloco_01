import { colors } from "../util/Colors"

export abstract class Produto {


    private _nome: string
    private _cor: string
    private _preco: number

    constructor(nome: string, cor: string, preco: number){
        this._nome = nome
        this._cor = cor
        this._preco = preco
    
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

    public get preco (){
        return this._preco
    }

    public set preco(preco: number){
        this._preco = preco
    }
    
    public visualizar(): void {

        console.log(colors.fg.cyanstrong,"\n\n*****************************************************")
        console.log(" Produto")
        console.log("*****************************************************")
        console.log(" Nome: " + this._nome)
        console.log(" Cor: " + this._cor, colors.reset)


    }

}