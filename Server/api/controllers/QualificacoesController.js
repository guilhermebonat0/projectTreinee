const database = require('../models/index.js')

class QualificacoesController {
    static async MostraQualificacoes(req, res) {
        try {
            const todasAsQualificacoes = await database.qualificacoes.findAll()
            return res.status(200).json(todasAsQualificacoes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async NovaQualificacao(req, res) {
        const novaQualificacao = req.body
        try {
            const cadastraNovaQualificacao = await database.qualificacoes.create(novaQualificacao)
            return res.status(200).json(cadastraNovaQualificacao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async EditaQualificacao (req, res) {
        const novasInfos = req.body
        const { id }= req.params
        try {
            await database.qualificacoes.update(novasInfos, id)
            const qualificacaoAtualizada  = await database.qualificacoes.findOne ( {
                where: {
                    id: Number(id)
                }
            }); return res.status(500).json(qualificacaoAtualizada) 
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async ApagaQualificacao(req, res) {
        const { id } = req.params
        try {
            await database.qualificacoes.destroy({
                where: {
                    id: Number(id)
                }}); return res.status(200).json({mensagem:`Qualificacao ${id} deletada com sucesso`})  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = QualificacoesController;