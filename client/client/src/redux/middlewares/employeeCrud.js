import actions from "..//actions"

// export const GetAllEmployees = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'GET_ALL_EMPLOYEES') {
//         fetch('http://localhost:4000/getAllEmployees'), {
//             method: 'GET'
//         }
//             .then((response) => {
//                 return response.json()
//             }).then((result) => {
//                 console.log(result)
//                 return result;
//             }).catch((error) => {
//                 console.log(error);
//             })
//     }
// }

export const addEmployee = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_NEW_EMPLOYEE') {

        fetch('http://localhost:4000/createEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                dispatch(actions.addUserAfterReturnFromServer(result.employee))
            })
    }
    return next(action);
}

export const checkPermission = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CHECK_PERMISSION') {

        fetch('http://localhost:4000/checkPermission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
        })
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                console.log(result)
                return result.employee

            })
    }
    return next(action);
}
