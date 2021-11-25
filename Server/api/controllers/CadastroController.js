const database = require('../models/index.js')

class CadastroController {//Faz a leitura de todos os logins
    
    static async MostraLogin(req, res) {

        try{
            const todosOsLogins = await database.logins.findAll()
            return res.status(200).json(todosOsLogins)
        }   catch (error) {
            return res.status(500).json(error.message)
        } 
    }
    
    //cria um novo login/cadastro
    static async CriaCadastro (req, res) {
        const novoCadastro = req.body
       
        try {
            const criaUmCadastro = await database.logins.create(novoCadastro)
            return res.status(200).json(criaUmCadastro)          
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = CadastroController