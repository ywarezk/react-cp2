/**
 * login formik
 * validation
 * error
 */

import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
    email: Yup.string().required("The field is required").email("wrong format"),
    password: Yup.string().required()
})

export default () => {
    const handleLogin = (values) => {
        console.log(values);
    }

    return (

        <Formik
            initialValues={ {} }
            onSubmit={handleLogin}
            validationSchema={loginSchema}
        >
            <Form>
                <div className="form-group">
                    <label>Email</label>
                    <Field type="email" name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="alert alert-danger" />
                </div>    
                <div className="form-group">
                    <label>Password</label>
                    <Field required type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" />
                </div>    
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </Form>
        </Formik>        
    );
}