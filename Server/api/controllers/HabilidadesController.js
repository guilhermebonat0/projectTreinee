const database = require("../models/index.js")

class HabilidadesController {
    static async MostraHabilidades(req, res) {
        try {
            const todasAsHabilidades = await database.habilidades.findAll()
            return res.status(200).json(todasAsHabilidades)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async NovaHabilidade(req, res) {
        const novaHabilidade = req.body
        try {
            const cadastraNovaHabilidade = await database.habilidades.create(novaHabilidade)
            return res.status(200).json(cadastraNovaHabilidade)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async EditaHabilidade(req, res) {
        const novasInfos = req.body
        const { id } = req.params
        try {
            await database.habilidades.update(novasInfos, id)
            const habilidadeAtualizada = await database.habilidades.findOne({
                where: {
                    id: Number(id)
                }
            }); return res.status(200).json(habilidadeAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async ApagaHabilidade(req, res) {
        const { id } = req.params
        try {
            await database.habilidades.destroy({
                where: {
                    id: Number(id)
                }}); return res.status(200).json({mensagem:`Habilidade ${id} deletada com sucesso`})  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = HabilidadesController