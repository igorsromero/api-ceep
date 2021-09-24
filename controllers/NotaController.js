const { NotasServices } = require("../services");
const notasServices = new NotasServices();

class NotaController {
    static async pegaTodasAsNotas(request, response) {
        try {
            const notas = await notasServices.pegaTodasAsNotas();
            return response.status(200).json(notas);
        } catch (error) {
            return response.status(500).json(error.message);
        }
    }

    static async criarNovaNota(request, response) {
        const dados = request.body;
        try {
            const nota = await notasServices.criarNovaNota(dados);
            return response.status(201).json(nota);
        } catch (error) {
            return response.status(500).json(error.message)
        }
    }
}

module.exports = NotaController