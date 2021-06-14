const Employee = require('../models/employee')
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv")
dotenv.config()

const getAll = async (req, res) => {
    try {
        let employees = await Employee.find()
        res.json({ status: 200, employees: employees })
    }
    catch (error) {
        res.json({ status: 400, error: error.message })
    }
}
const createEmployee = async (req, res) => {
    try {
        let employee = new Employee({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await employee.save()
        res.json({ status: 200, employee: employee })
    }
    catch (err) {
        res.json({ status: 400, error: err.message })
    }
}
const checkPermission = async (req, res, next) => {
    try {
        let token = jwt.sign({ email: req.body.email, password: req.body.password }, process.env.SECRET)
        let employee = await Employee.findOne({ email: req.body.email })
        req.headers.token=token
        req.employee=employee
        res.json({ status: 200, employee: employee, token: token })
        return employee

    }
    catch (error) {
        res.json({ status: 400, error: error.message })
    }
}
const getEmplyeeById = async (req, res) => {
    try {
        let employee = await Employee.findById(req.params.id)
        res.json({ status: 200, employee: employee })
    }
    catch (error) {
        res.json({ status: 400, error: error.message })
    }
}
const updateEmployee = async (req, res) => {
    try {
        let employee = await Employee.findByIdAndUpdate(
            req.params.id,
            {
            name: req.body.name,
            password: req.body.password,
            status: req.body.status
        })
        res.json({ status: 200, employee: employee })
    }
    catch (err) {
        res.json({ status: 400, error: err.message })
    }
}

module.exports = { getAll, createEmployee, checkPermission, getEmplyeeById, updateEmployee }