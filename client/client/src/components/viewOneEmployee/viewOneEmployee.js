import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import './viewUser.css'
function ViewOneUser(props) {
    let [disabled, setDisabled] = useState(true)

    const changeFiled = (event) => {
        if (props.indexOfEmployeeInRedux != props.indexEmployee)
            alert('you should selected user to edit, click edit of this user')
        else {
            setDisabled(false)
            props.setEmployee({ name: event.target.name, value: event.target.value })

        }
    }

    return (
        <>
            <li>
                <input
                    className='input_filed_user'
                    value={props.user.name}
                    onChange={changeFiled}
                    name='name'
                ></input>
                <input
                    className='input_filed_user'
                    value={props.user.status}
                    onChange={changeFiled}
                    name='status'
                ></input>
                <button onClick={() => {
                    alert(`you edit user ${props.indexEmployee + 1}`);
                    props.saveIndexOfEmployeeThatEditHimNow(props.indexEmployee)
                }}>edit</button>
                <button disabled={disabled}>save</button>
            </li>

        </>
    )
}


const mapStateToProps = (state) => {
    return {
        indexOfEmployeeInRedux: state.employee.indexEmployee
    }
}
const mapDispatch = (dispatch) => {
    return {
        setEmployee: (emp) => dispatch(actions.setEmployee(emp)),
        saveIndexOfEmployeeThatEditHimNow: (emp) => dispatch(actions.saveIndexOfEmployeeThatEditHimNow(emp))
    }
}
export default connect(mapStateToProps, mapDispatch)(ViewOneUser)