import Render from './render.js';
import Task from './task.js';

class App {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        this.render = new Render();

        if (this.tasks === null) {
            this.tasks = [];
        }
    }

    addTask(description) {
        const task = new Task(Date.now(), description, false); 

        this.tasks.push(task);
        this.saveInStorage();
        this.renderDOM()
    }

    saveInStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    updateTask(id) {
        const index = this.tasks.findIndex(element => element.id === id);

        this.tasks[index].status = !this.tasks[index].status;
        this.saveInStorage();
        this.renderDOM()
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(element => element.id === id);

        this.tasks.splice(index, 1);
        this.saveInStorage();
        this.renderDOM()
    }

    renderDOM() {
        if (this.tasks.length > 0) {
            this.render.renderDOM(this.tasks);
        } else {
            const tasksContainer = document.querySelector('#tasks-container');
            tasksContainer.innerHTML = '<h2 class="tasks__message">No tasks available</h2>';
        }
    }

}

export default App;