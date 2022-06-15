import Task from './task.js';

class App {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));

        if (this.tasks === null) {
            this.tasks = [];
        }
    }

    addTask(description) {
        const task = new Task(Date.now(), description, false); 

        this.tasks.push(task);
        this.saveInStorage();
    }

    saveInStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    updateTask(id) {
        const index = this.tasks.findIndex(element => element.id === id);

        this.tasks[index].status = !this.tasks[index].status;
        this.saveInStorage();
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(element => element.id === id);

        this.tasks.splice(index, 1);
        this.saveInStorage();
    }

}

export default App;