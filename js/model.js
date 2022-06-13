import Task from "./task.js";

class Model {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));

        if (this.tasks === null) {
            this.tasks = [];
        }
    }

    createId() {
        if (this.tasks.length === 0) {
            return this.tasks.length;
        } else {
            return this.tasks[this.tasks.length - 1].id + 1;
        }
    }

    findIndex(id) {
        const index = this.tasks.find((element, index) => {if (element.id === id) {return index}});

        return index;
    }

    getTasks() {
        return this.tasks;
    }

    save() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTask(description) {
        const task = new Task(this.createId(), description, false);
        this.tasks.push(task);
        this.save()
    }

    updateTask(id) {
        const indexTask = this.findIndex(id);

        console.log(indexTask)

        // this.tasks[indexTask].changeStatus();
        this.save();
    }

    deleteTask(id) {
        const indexTask = this.findIndex(id);

        this.tasks.splice(indexTask, 1);
        this.save();
    }

}

export default Model;