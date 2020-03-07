import React, {useEffect} from 'react'

import {Redirect} from "react-router-dom";
import s from '../App.module.css'
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUserData, login} from "../redux/auth-reducer";

export const Login = () => {

    const {success, loading, error} = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthUserData());

    }, [dispatch]);

    const onSubmit = (formData) => {
        dispatch(login(formData.email, formData.password))
    };

    if (success) {
        return <Redirect to={"/todolist"}/>
    }

    return (
        <div className={s.wrapper}>
            <span>Credentials for testing</span>
            <span>Email: <b>p.milenkii@gmail.com</b></span>
            <span>Password: <b>test</b></span>
            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'green'}}>Success!</div>
                        : <div><br/></div>
            }

            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
};


