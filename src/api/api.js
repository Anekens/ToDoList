import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/todo-lists/",
    headers: {
        "API-KEY": "99877a27-c404-4003-9d7e-bbb983559996"
    }
});


export const api = {
    createTask(newTaskTitle, todolistId) {
        return instance.post(`${todolistId}/tasks`, {title: newTaskTitle})
    },
    createTodolist(title) {
        return instance.post("", {title: title})
    },
    getTodolists() {
        return instance.get("")
    },
    updateTask(task) {

        return instance.put('tasks', task)
    },
    deleteTodolist(id) {
        return instance.delete('' + id)
    },
    deleteTask(id) {
        return instance.delete(`tasks/ ${id}`)
    },
    getTasks(todolistId) {
        return instance.get(`${todolistId}/tasks`)
    },
    updateTitleTodolist(todolistId, newTitle) {
        return instance.put(`${todolistId}`, {title: newTitle})
    }
};
