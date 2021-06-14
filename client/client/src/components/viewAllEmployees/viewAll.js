import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import ViewOneEmployee from '../viewOneEmployee/viewOneEmployee'
import { GetAllEmployees } from '../../redux/middlewares/employeeCrud'

function ViewUsers(props) {
    let url = 'http://localhost:4000/getAllEmployees'

    useEffect(() => {
        GetAllEmployees()
    }, [])

    // const [users, setUsers] = useState([])
    const GetAllEmployees = async () => {
        fetch(url,
            { method: 'GET' }
        ).then((response) => {//מחזיר נתונים של הבקשה שביצענו
            console.log(response);
            return response.json()
        }).then((result) => {//מחזיר את התוצאה
            props.setEmployees(result.employees)
            console.log(result.employees)
            console.log(result)
        }).catch((error) => {
            console.log(error);
        })
    }

    const renderUsers = () => {
        return props.EmployeesList && props.EmployeesList.map((user, index) => {
            return<ul> <ViewOneEmployee indexEmployee={index} user={user}></ViewOneEmployee></ul>
        })
    }
    return (
        <>
            {renderUsers()}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        EmployeesList: state.employee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setEmployees: (employees) => dispatch(actions.setEmployees(employees))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers)