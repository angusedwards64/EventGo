const { Router } = require('express')
const router = Router()
const { getEvents, postEvents } = require('./controller')


router.get('/events', getEvents)
router.post('/events', postEvents)


module.exports = router;