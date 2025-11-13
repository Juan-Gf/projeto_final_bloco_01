import { Produto } from "./Produto"

export class Patins extends Produto {

    private _quantRodas: number
    private _tamanho: number
    private _modelo: string

    constructor(nome: string, cor: string, quantRodas: number, tamanho: number, modelo: string,){
        super(nome, cor)
        this._quantRodas = quantRodas
        this._tamanho = tamanho
        this._modelo = modelo
    }

    public get quantRodas (){
        return this._quantRodas
    }

    public set quantRodas(quantRodas: number){
        this._quantRodas = quantRodas
    }

    public get tamanho (){
        return this._tamanho
    }

    public set tamanho(tamanho: number){
        this._tamanho = tamanho
    }

     public get modelo() {
        return this._modelo
    }

    public set modelo(modelo: string) {
        this._modelo = modelo
    }
    
    public visualizar(): void {
        super.visualizar();
        console.log("Modelo: " + this._modelo)
        console.log("Tamanho: " + this.tamanho)
        console.log("Quantidade de Rodas: " + this.quantRodas)
    }

}