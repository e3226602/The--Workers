export default function ViewStatus(props){


}

const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatch = (dispatch) => {
    return {
        setEmployee: (emp) => dispatch(actions.setEmployee(emp)),
    }
}
export default connect(mapStateToProps, mapDispatch)(ViewOneUser)