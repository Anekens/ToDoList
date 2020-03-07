import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "99877a27-c404-4003-9d7e-bbb983559996"
    }
});


export const api = {
    _processResponse(promise) {
        return promise.then(res => res.data).catch(error => {
            console.log(error);
            throw new Error('API error')
        })
    },
    getMe() {
        return this._processResponse(instance.get(`auth/me`));
    },
    login(email, password) {
        return this._processResponse(instance.post(`auth/login`, {email, password}));
    },
    logout() {
        return this._processResponse(instance.delete(`auth/login`));
    },

    createTask(newTaskTitle, todolistId) {
        return this._processResponse(instance.post(`todo-lists/${todolistId}/tasks`, {title: newTaskTitle}))
    },
    createTodolist(title) {
        return this._processResponse(instance.post("todo-lists", {title: title}))
    },
    getTodolists() {
        return this._processResponse(instance.get("todo-lists"))
    },
    updateTask(task) {
        return this._processResponse(instance.put('todo-lists/tasks', task))
    },
    deleteTodolist(id) {
        return this._processResponse(instance.delete('todo-lists/' + id))
    },
    deleteTask(id) {
        return this._processResponse(instance.delete(`todo-lists/tasks/ ${id}`))
    },
    getTasks(todolistId) {
        return this._processResponse(instance.get(`todo-lists/${todolistId}/tasks`))
    },
    updateTitleTodolist(todolistId, newTitle) {
        return this._processResponse(instance.put(`todo-lists/${todolistId}`, {title: newTitle}))
    }
};



