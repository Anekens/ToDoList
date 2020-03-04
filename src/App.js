import React from 'react';
import TodolistAPP from "./components/TodolistAPP";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Login from "./components/Login";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import {connect} from "react-redux";

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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

export default AppContainer


