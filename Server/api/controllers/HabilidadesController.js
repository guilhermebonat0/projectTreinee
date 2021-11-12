const database = require("../models/index.js")

class HabilidadesController {
    static async MostraHabilidades (req,res){
        try {
            const todasAsHabilidades = await database.habilidades.findAll()           
            return res.status(200).json(todasAsHabilidades)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async NovaHabilidade (req, res ){
        const novaHabiolidade = req.body        
        try {
            const cadastraNovaHabilidade = await database.habilidades.create(novaHabiolidade)          
            return res.status(200).json(cadastraNovaHabilidade)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = HabilidadesController