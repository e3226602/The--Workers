const router = require('express').Router()

const employeeFunctions = require('./controllers/employee')

router.post('/createEmployee', employeeFunctions.createEmployee)
router.get('/getAllEmployees', employeeFunctions.getAll)
router.post('/checkPermission', employeeFunctions.checkPermission)
router.get('/getEmplyeeById/:id', employeeFunctions.getEmplyeeById)
router.post('/updateEmployee/:id', employeeFunctions.updateEmployee)

module.exports = router