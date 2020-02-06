/**
 * login component
 * Formik
 */

import React, {useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userService from "../../services/user.service";
// {string, object}
import * as Yup from "yup";
import JwtContext from "../../contexts/jwt-context";

const loginScheme = Yup.object().shape({
    email: Yup.string().required("The email field is required").email("The email is in bad format"),
    password: Yup.string().required("The password field is required").min(5, "Your password is too short")
});

export default function Login() {
    const contextData = useContext(JwtContext)
    
    const handleLogin = async (values) => {
        console.log(values);
        // userService.login(values).then((jwt) => ...)
        const jwt = await userService.login(values);
        console.log(jwt);
        contextData.setToken(jwt);
        // Promise<void>
    }

    return (
        <Formik
            onSubmit={handleLogin}
            initialValues={ {email: "yariv@nerdeez.com", password: "12345"} }
            validationSchema={loginScheme}
        >
            {/* () => {...}     */}
            <Form>
                <div className="form-group">
                    <label>Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" render={(errorMessage) => {
                        return (
                            <div className="alert alert-danger">{errorMessage}</div>    
                        )
                    }} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage 
                        name="password" 
                        component="div" 
                        className="alert alert-danger" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </Form>
        </Formik>
    )
}