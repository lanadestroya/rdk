const Router = require('express')
const router = new Router()
const eventRouter = require('./eventRouter')
const buyRouter = require('./buyRouter')
const userRouter = require('./userRouter')
const rolesRouter = require('./rolesRouter')
const clientsRouter = require('./clientsRouter')

router.use('/user', userRouter)
router.use('/event', eventRouter)
router.use('/roles', rolesRouter)
router.use('/clients', clientsRouter)
router.use('/buy', buyRouter)


module.exports = router