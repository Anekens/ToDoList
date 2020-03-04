import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getAuthUserData, login} from "../redux/auth-reducer";
import {Redirect, withRouter} from "react-router-dom";
import s from '../App.module.css'
import {compose} from "redux";
import LoginForm from "./LoginForm";

const Login = (props) => {

    useEffect(() => {
        const fetchData = async () => {
            await props.getAuthUserData();
        };
        fetchData();
    }, [props]);

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
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {login, getAuthUserData}),
    withRouter,
)(Login);