const database = require('../models/index.js')
const bcrypt = require ('bcrypt')
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';


class LoginController {//Faz a leitura de todos os logins
    
    static async MostraLogin(req, res) {
        const email = req.body.email
        const senha = req.body.senhaHash

        try{
            const todosOsLogins = await database.logins.findAll()
            return res.status(200).json(todosOsLogins)
        }   catch (error) {
            return res.status(500).json(error.message)
        }
 
 
    }
    //cria um novo login/cadastro
    static async CriaLogin (req, res) {
        const novoLogin = req.body
        const senha = req.body.senhaHash
        try {
            const criaUmLogin = await database.logins.create(novoLogin)
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(senha, salt, function(err, hash) {
                    return res.status(200).json(criaUmLogin)
                });
            });
            
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async GerarSenhaHash(req, res, senha){
        const email = req.body.email
        console.log(email)
        const custoHash = 12;
        return  bcrypt.hash(senha, custoHash)
    }

    
    async adicionaSenha(senha){
        this.senhaHash = await CriaLogin.GerarSenhaHash(senha);
    }
}


module.exports = LoginController