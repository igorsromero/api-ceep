const database = require("../models")

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodasAsNotas() {
        return database[this.nomeDoModelo].findAll();
    }

    async criarNovaNota(dados) {
        return database[this.nomeDoModelo].create(dados);
    }
}

module.exports = Services;