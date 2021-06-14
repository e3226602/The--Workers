import produce from 'immer'
import createReducer from '../ReducerUtil'
import {checkPermission} from '../middlewares/employeeCrud'


const initialState = {
    employees: [],
    indexEmployee: 0,
    currentEmployee: {}
}

const employeeFunctions = {
    addEmployeeAfterReturnFromServer(state, action) {
        state.employee.push(action.payload)
    },
    setEmployees(state, action) {
        state.employee = action.payload
    },
    setEmployee(state, action) {
        state.employee[state.indexEmployee][action.payload.name] = action.payload.value
    },
    saveIndexOfEmployeeThatEditHimNow(state, action) {
        state.indexEmployee = action.payload
    },
    checkPermissions(state, action) {
        state.currentEmployee=checkPermission(action.payload)
    }


}
export default produce((state, action) =>
    createReducer(state, action, employeeFunctions)
    , initialState)