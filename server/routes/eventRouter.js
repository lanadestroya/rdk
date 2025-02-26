const Router = require('express')
const router = new Router()
const eventController = require('../controllers/eventController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), eventController.create)
router.get('/',eventController.getAll)
router.get('/',eventController.getOne)


module.exports = router