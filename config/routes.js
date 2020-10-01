const router = require('express').Router()
const floatValue = require('../controllers/floatValue')


router.route('/value')

.get(floatValue.getValue)

router.route('/value/:id')
.put(floatValue.updateValue)

router.route('/float')
.post(floatValue.createValue)

module.exports = router