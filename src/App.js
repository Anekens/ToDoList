import React from 'react';
import {TodolistAPP} from "./components/TodolistAPP";
import {Redirect, Route, Switch} from "react-router-dom";
import {Login }from "./components/Login";


export const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/todolist'}/>}/>
                <Route path='/todolist' render={() => <TodolistAPP/>}/>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>

    );
};



