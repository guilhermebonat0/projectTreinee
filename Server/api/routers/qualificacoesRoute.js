const { Router } = require('express')
const QualificacoesController = require('../controllers/QualificacoesController')

const router = Router ()

router.get('/qualificacoes', QualificacoesController.MostraQualificacoes)
router.post('/qualificacoes', QualificacoesController.novaQualificacao)

module.exports = router