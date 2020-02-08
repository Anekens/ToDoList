import React from 'react'
import {reduxForm} from "redux-form";
import {createField, InputType} from "./FormsControls/FormsControls";
import s from './FormsControls/FormsControls.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <span>Email</span>
            {createField("Email", "email", [], InputType)}
            <span>Password</span>
            {createField("Password", "password", [], InputType,
                {type: "password"})}
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <button>Login</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm