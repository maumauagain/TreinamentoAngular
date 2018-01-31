import {contatos} from './contatos';
import {sexoTipo} from './sexo.enum';

class main {
    public static criarContato(nomeCompleto: string, email: string, dataNasc: Date, favorito: boolean, sexo?: sexoTipo, ): void{
        const contato = new contatos (nomeCompleto, email, dataNasc, favorito, sexoTipo.masculino);
        this.exibirMensagem('Contato criado!!!');
    }

    public static exibirMensagem(mensagem?: string): void{
        mensagem = mensagem || 'Nenhuma mensagem a ser exibida';
        console.log(mensagem);
    }
}

main.criarContato('Amauri Martins', 'Amauri.martins@junior', new Date('01/30/2000'), true, sexoTipo.masculino );
