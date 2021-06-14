import employee from './reducers/employee'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import {checkPermission} from '../redux/middlewares/employeeCrud'

const reducer = employee
const store = createStore(reducer,applyMiddleware(checkPermission))
window.store = store
export default store