const { Router } = require('express')
const HabilidadesController = require('../controllers/HabilidadesController')

const router = Router ()

router.get('/habilidades', HabilidadesController.MostraHabilidades)
router.post('/habilidades', HabilidadesController.NovaHabilidade)

module.exports = router;