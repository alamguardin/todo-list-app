class Render {
    renderDOM(array) {
        const target = document.querySelector('#tasks-container');

        let fragment = '';

        array.forEach(element => {
            const template = 
            `
            <div class="card ${element.status ? '--active' : ''}">
                <div class="card__status">
                    <button class="card__button">
                        <i class='bx bx-check'></i>
                    </button>
                </div>
                <div class="card__content">
                    <p class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <a href="#" class="card__delete">
                    <i class='bx bx-x'></i>
                </a>
            </div>
            `;

            fragment += template;
        });
        
        target.innerHTML = fragment;
    }
}

export default Render;