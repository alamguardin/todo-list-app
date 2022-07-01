import Render from './render.js';
import Task from './task.js';

class App {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        this.render = new Render();
        this.darkMode = JSON.parse(localStorage.getItem('theme'));
        this.filter = '';

        if (this.tasks === null) {
            this.tasks = [];
        }

        if (this.darkMode === null) {
            this.darkMode = false;
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

    setFilter(filter) {
        this.filter = filter;
        this.renderDOM();
    }

    renderDOM() {
        if (this.tasks.length > 0) {
            switch (this.filter) {
                case 'Active':
                    this.render.renderDOM(this.tasks.filter(element => element.status === false));
                    break;
                case 'Completed':
                    this.render.renderDOM(this.tasks.filter(element => element.status === true));
                    break;
                case 'All':
                default:
                    this.render.renderDOM(this.tasks);
                    break;
            }
        } else {
            const tasksContainer = document.querySelector('#tasks-container');
            tasksContainer.innerHTML = '<h2 class="tasks__message">No tasks available</h2>';
        }

        this.putTheme();
    }

    setTheme() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('theme', JSON.stringify(this.darkMode));

        this.putTheme()
    }

    putTheme() {
        if (this.darkMode === true) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    getTasksLength() {
        return this.tasks.length;
    }

}

export default App;