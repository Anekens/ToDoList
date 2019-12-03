import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import AddNewItemForm from "./components/AddNewItemForm";
import {connect} from "react-redux";
import {addTodolistTC, setTodolistsTC} from "./redux/reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.setTodolistsTC();
    }

    addTodoList = (title) => {
        this.props.addTodolistTC(title);
    };

    render = () => {
        const todolists = this.props
            .todolists
            .map(tl => <TodoList
                key={tl.id}
                id={tl.id}
                title={tl.title}
                tasks={tl.tasks}
                addedDate={tl.addedDate}/>);
        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>
                <div className="App">
                    {todolists}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
};

const ConnectedApp = connect(mapStateToProps, {addTodolistTC, setTodolistsTC})(App);
export default ConnectedApp;

