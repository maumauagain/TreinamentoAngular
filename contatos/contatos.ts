import {ContatoInterface} from './contato.interface';
import {sexoTipo} from './sexo.enum';

export class contatos implements ContatoInterface {
    private _nomeCompleto: string;
    private _email: string;
    private _dataNasc: Date;
    private _sexo: sexoTipo;
    private _favorito: boolean;

    constructor(nomeCompleto: string, email: string, dataNasc: Date, favorito: boolean, sexo?: sexoTipo, ){
        this._nomeCompleto = nomeCompleto;
        this._email = email;
        this._dataNasc = dataNasc;
        this._sexo = sexoTipo.masculino;
        this._favorito = favorito;
    }

    get nomeCompleto(): string{
        return this._nomeCompleto;
    }

    get email(): string {
        return this._email;
    }

    get dataNasc(): Date{
        return this._dataNasc;
    }

    get sexo(): sexoTipo{
        return this._sexo;
    }

    get favorito(): boolean{
        return this._favorito;
    }

    calcIdade(dataNasc : Date): number{
        var atual: Date = new Date('01/31/2018');
        console.log(2018 - 1998);
        return atual.getFullYear() - dataNasc.getFullYear();
        
    }


}
