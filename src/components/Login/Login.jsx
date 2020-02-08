import React, {useEffect} from 'react'
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {getAuthUserData, login} from "../../redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import s from './Login.module.css'
import {compose} from "redux";

const Login = (props) => {
    useEffect(() => {
        const fetchData = async () => {
            await props.getAuthUserData();
        };
        fetchData();
    }, []);

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={"/todolist"}/>
    }
    return (
        <div className={s.wrapper}>
            <span>Credentials for testing</span>
            <span>Email: <b>p.milenkii@gmail.com</b></span>
            <span>Password: <b>test</b></span>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default compose(
    connect(mapStateToProps, {login, getAuthUserData}),
    withRouter,
)(Login);