import App from "./app.js";

const app = new App();
app.renderDOM();

const btnTheme = document.querySelector('#btn-toggle-theme');
const inputTask = document.querySelector('#input-task');
const btnAddTask = document.querySelector('#btn-add-task');
const tasksContainer = document.querySelector('#tasks-container');
const filterContainer = document.querySelector('.actions .actions__filter');

btnTheme.addEventListener('click', () => { app.setTheme() });

btnAddTask.addEventListener('click', () => {
    if (inputTask.value.length > 0) {
        app.addTask(inputTask.value);
        inputTask.value = '';
        showTasksLength();
    } else {
        console.log('Not description');
    }
})

tasksContainer.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.className === 'bx bx-check') {
        app.updateTask(parseInt(e.target.parentNode.parentNode.parentNode.id));
    }

    if (e.target.className === 'bx bx-x') {
        app.deleteTask(parseInt(e.target.parentNode.parentNode.id));
        showTasksLength();
    }
})

filterContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('actions__item-filter')) {
        let buttonsFilter = document.querySelectorAll('.actions__item-filter');
        
        buttonsFilter.forEach(element => {element.classList.remove('--active')});

        e.target.classList.add('--active');
        app.setFilter(e.target.textContent);
    }
})

const showTasksLength = () => {
    const tasksLengthContainer = document.querySelector('#length');

    tasksLengthContainer.textContent = app.getTasksLength();
}

showTasksLength()