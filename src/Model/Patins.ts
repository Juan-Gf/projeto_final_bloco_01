import { colors } from "../util/Colors"
import { Produto } from "./Produto"

export class Patins extends Produto {

    private _quantRodas: number
    private _tamanho: number
    private _modelo: string

    constructor(nome: string, cor: string, modelo: string, tamanho: number, quantRodas: number, preco: number) {
        
        super(nome, cor, preco)
        this._modelo = modelo
        this._tamanho = tamanho
        this._quantRodas = quantRodas
    }

     public get modelo() {
        return this._modelo
    }

    public set modelo(modelo: string) {
        this._modelo = modelo
    }

        public get tamanho (){
        return this._tamanho
    }

    public set tamanho(tamanho: number){
        this._tamanho = tamanho
    }

    public get quantRodas (){
        return this._quantRodas
    }

    public set quantRodas(quantRodas: number){
        this._quantRodas = quantRodas
    }


    
    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.cyanstrong,"Modelo: " + this._modelo)
        console.log(" Tamanho: " + this.tamanho)
        console.log(" Quantidade de Rodas: " + this.quantRodas)
        console.log(" Preço R$: " + super.preco.toFixed(2))
    }

}