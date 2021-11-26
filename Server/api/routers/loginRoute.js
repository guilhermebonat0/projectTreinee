const { Router } = require('express');
const CadastroController = require('../controllers/CadastroController');

const router = Router()

router.get('/login', CadastroController.MostraLogin)
router.post('/cadastro', CadastroController.CriaCadastro)
router.put('/cadastro', CadastroController.EditaCadastro)
router.delete('/cadastro', CadastroController.ApagaCadastro)

module.exports = router