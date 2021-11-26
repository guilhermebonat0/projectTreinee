const { Router } = require('express')
const QualificacoesController = require('../controllers/QualificacoesController')

const router = Router ()

router.get('/qualificacoes', QualificacoesController.MostraQualificacoes)
router.post('/qualificacoes', QualificacoesController.NovaQualificacao)
router.put('/qualificacoes', QualificacoesController.EditaQualificacao)
router.delete('/qualificacoes', QualificacoesController.ApagaQualificacao)


module.exports = router