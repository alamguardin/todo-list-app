class Task {
    constructor(id, description, status) {
        this.id = id;
        this.description = description;
        this.status = status;
    }

    changeStatus() {
        this.status = !this.status;
    }
}

export default Task;