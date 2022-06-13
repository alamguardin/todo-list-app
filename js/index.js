import View from "./view.js";

document.addEventListener('DOMContentLoaded', () => {
    const view = new View;
    view.render();

    const inputDescription = document.querySelector('#input-task');
    const btnAddTask = document.querySelector('#btn-add-task');

    btnAddTask.addEventListener('click', () => {
        if (inputDescription.value) {
            view.createTask(inputDescription.value)
            inputDescription.value = '';
        } else {
            inputDescription.classList.add('--error')
            inputDescription.addEventListener('click', () => {
                if (inputDescription.classList.contains('--error')) {
                    inputDescription.classList.remove('--error')
                }
            })
        }
        
    })
});