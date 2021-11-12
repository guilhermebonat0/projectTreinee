const { Router } = require('express')
const LoginController = require('../controllers/LoginController')

const router = Router()

router.get('/login', LoginController.MostraLogin)
router.post('/login', LoginController.CriaLogin)

module.exports = router