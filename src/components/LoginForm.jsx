import React from 'react'
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import s from '../App.module.css'


const LoginForm = (props) => {
    return (
        <div className={s.formRedux}>
            <form onSubmit={props.handleSubmit}>
                <label>Email</label>
                <Field name="email" component="input" type="text"/>
                <label>Password</label>
                <Field name="password" component="input" type="Password"/>
                <button>Login</button>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default LoginReduxForm