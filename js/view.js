import Model from "./model.js";

class View {
    constructor() {
        this.model = new Model();
        this.containerTasks = document.querySelector('#tasks-container');
    }

    createTask(description) {
        if (description) {
            this.model.addTask(description);
        } else {
            console.log('Error, add something in the input');
        }

        this.render()
    }

    render() {
        let fragment = '';

        const tasks = this.model.getTasks();

        if (tasks.length > 0) {
            tasks.forEach(element => {
            const template = 
            `
            <div class="card" id="${element.id}">
                <div class="card__status">
                    <button class="card__button">
                        <i class='bx bx-check'></i>
                    </button>
                </div>
                 <div class="card__content">
                    <p class="card__text">${element.description}</p>
                </div>
                <a href="#" class="card__delete">
                    <i class='bx bx-x'></i>
                </a>
            </div>
            `;

            fragment += template;
            });

            this.containerTasks.innerHTML = fragment;
        } else {
            console.log('Nothign for view');

        }
        
    }
}

export default View;