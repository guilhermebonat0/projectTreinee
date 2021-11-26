const { Router } = require('express')
const HabilidadesController = require('../controllers/HabilidadesController')

const router = Router ()

router.get('/habilidades', HabilidadesController.MostraHabilidades)
router.post('/habilidades', HabilidadesController.NovaHabilidade)
router.put('/habilidades', HabilidadesController.EditaHabilidade)
router.delete('/habilidades', HabilidadesController.ApagaHabilidade)

module.exports = router;