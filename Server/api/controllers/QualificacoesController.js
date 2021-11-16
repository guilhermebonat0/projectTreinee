const database = require('../models/index.js')

class QualificacoesController {
    static async MostraQualificacoes (req,res){
        try {
            const todasAsQualificacoes = await database.qualificacoes.findAll()           
            return res.status(200).json(todasAsQualificacoes)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async NovaQualificacao (req, res ){
        const novaQualificacao = req.body        
        try {
            const cadastraNovaQualificacao = await database.qualificacoes.create(novaQualificacao)          
            return res.status(200).json(cadastraNovaQualificacao)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = QualificacoesController;