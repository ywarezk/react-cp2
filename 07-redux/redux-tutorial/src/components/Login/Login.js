/**
 * Form
 * with firstName
 * lastName
 * submit it should set the new user in the state
 */

import React from "react"
import {Formik, Form, Field} from "formik";
import {setUser} from "../../redux/actions/user.actions";
import {connect} from "react-redux";

function Login({setUserInStore}) {
    // {firstName: '', lastName: ''}
    const handleLogin = (values) => {
        console.log(values);
        // store.dispatch(setUser(values))
        // setUserInStore(setUser(values)) => store.dispatch(setUser(values))
        setUserInStore(values);
    }

    return (
        <Formik
            initialValues={ {firstName: "", lastName: ""} }
            onSubmit={handleLogin}
        >
            <Form>
                <div className="form-group">
                    <label>First Name</label>
                    <Field type="text" name="firstName" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <Field type="text" name="lastName" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" >Login</button>
                </div>
            </Form>
        </Formik>
    )
}

export default connect(
    null,
    {
        setUserInStore: setUser
    }
)(Login)