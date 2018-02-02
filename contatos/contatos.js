"use strict";
exports.__esModule = true;
var sexo_enum_1 = require("./sexo.enum");
var contatos = /** @class */ (function () {
    function contatos(nomeCompleto, email, dataNasc, favorito, sexo) {
        this._nomeCompleto = nomeCompleto;
        this._email = email;
        this._dataNasc = dataNasc;
        this._sexo = sexo_enum_1.sexoTipo.masculino;
        this._favorito = favorito;
    }
    Object.defineProperty(contatos.prototype, "nomeCompleto", {
        get: function () {
            return this._nomeCompleto;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(contatos.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(contatos.prototype, "dataNasc", {
        get: function () {
            return this._dataNasc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(contatos.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(contatos.prototype, "favorito", {
        get: function () {
            return this._favorito;
        },
        enumerable: true,
        configurable: true
    });
    contatos.prototype.calcIdade = function (dataNasc) {
        var atual = new Date('01/31/2018');
        console.log(2018 - 1998);
        return atual.getFullYear() - dataNasc.getFullYear();
    };
    return contatos;
}());
exports.contatos = contatos;
