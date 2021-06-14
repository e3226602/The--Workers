import React, { useState } from 'react';
import './login.css';
import actions from '../../redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

function LoginForm(props) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let enter = () => {
        props.checkPermission({ email, password })
    }
    if (props.currentEmployee != {})
        <Redirect to={{ pathname: '/' }}></Redirect>

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label >email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="EmailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <small id="EmailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label >Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="form-check">
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={enter}
                >Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentEmployee: state.currentEmployee
        // indexOfEmployeeInRedux: state.employee.indexEmployee
    }
}
const mapDispatch = (dispatch) => {
    return {
        // setEmployee: (emp) => dispatch(actions.setEmployee(emp)),
        // saveIndexOfEmployeeThatEditHimNow: (emp) => dispatch(actions.saveIndexOfEmployeeThatEditHimNow(emp))
        checkPermission: (values) => dispatch(actions.checkPermission(values))
    }
}
export default connect(mapStateToProps, mapDispatch)(LoginForm)
