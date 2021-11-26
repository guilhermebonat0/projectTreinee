const { Router } = require('express');
const CadastroController = require('../controllers/CadastroController');

const router = Router()

router.post('/login', CadastroController.MostraUmLogin)
router.post('/cadastro', CadastroController.CriaCadastro)
router.put('/cadastro', CadastroController.EditaCadastro)
router.delete('/cadastro', CadastroController.ApagaCadastro)

module.exports = router