"use strict";
exports.__esModule = true;
var contatos_1 = require("./contatos");
var sexo_enum_1 = require("./sexo.enum");
var main = /** @class */ (function () {
    function main() {
    }
    main.criarContato = function (nomeCompleto, email, dataNasc, favorito, sexo) {
        var contato = new contatos_1.contatos(nomeCompleto, email, dataNasc, favorito, sexo_enum_1.sexoTipo.masculino);
        this.exibirMensagem('Contato criado!!!');
    };
    main.exibirMensagem = function (mensagem) {
        mensagem = mensagem || 'Nenhuma mensagem a ser exibida';
        console.log(mensagem);
    };
    return main;
}());
main.criarContato('Amauri Martins', 'Amauri.martins@junior', new Date('01/30/2000'), true, sexo_enum_1.sexoTipo.masculino);
