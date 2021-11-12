const database = require('../models/index.js')


class LoginController {//Faz a leitura de todos os logins
    static async MostraLogin(req, res) {
        try{
            const todosOsLogins = await database.logins.findAll()
            return res.status(200).json(todosOsLogins)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
 
 
    }
    //cria um novo login
    static async CriaLogin (req, res) {
        const novoLogin = req.body
        try {
            const criaUmLogin = await database.logins.create(novoLogin)
            return res.status(200).json(criaUmLogin)
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }
}
module.exports = LoginController