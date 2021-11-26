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

    static async MostraUmLogin(req, res) {
        const {email, senhaHash} = req.body

        try{
            const umLogin = await database.logins.findOne ( {
                where: {
                    email: String(email),
                    senhaHash: String(senhaHash)
                }
            })
            if (!umLogin){
                return res.status(400).json({message:"Usuario ou senha incorretos"})
            }
            return res.status(200).json(umLogin)
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

    static async EditaCadastro (req, res) {
        const novasInfos = req.body
        const { id }= req.params
        try {
            await database.logins.update(novasInfos, id)
            const pessoaAtualizada  = await database.logins.findOne ( {
                where: {
                    id: Number(id)
                }
            }); return res.status(500).json(pessoaAtualizada) 
        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

    static async ApagaCadastro(req, res) {
        const { id } = req.params
        try {
            await database.logins.destroy({
                where: {
                    id: Number(id)
                }}); return res.status(200).json({mensagem:`Cadastro ${id} deletada com sucesso`})  
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = CadastroController