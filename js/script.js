'use strict'

const getData = document.querySelector('.get-data__button').addEventListener('click', () => {
    const data = document.querySelector('.get-data__input').value;
    const listElement = document.createElement('li');
    const deleteButton = document.createElement('button');

    const addText = () => {
        const list = document.querySelector('.data__list');
        listElement.innerHTML = data;
        listElement.classList.add('data__item');
        list.appendChild(listElement);
    }

    const addDeleteBuutton = () => {
        deleteButton.classList.add('data__button');
        listElement.appendChild(deleteButton);
    }

    deleteButton.addEventListener('click', () => {
        listElement.remove();
    });
    
    addText();
    addDeleteBuutton();
});

addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const data = document.querySelector('.get-data__input').value;
        const listElement = document.createElement('li');
        const deleteButton = document.createElement('button');

        const addText = () => {
            const list = document.querySelector('.data__list');
            listElement.innerHTML = data;
            listElement.classList.add('data__item');
            list.appendChild(listElement);
    }


    const addDeleteBuutton = () => {
        deleteButton.classList.add('data__button');
        listElement.appendChild(deleteButton);
    }

    deleteButton.addEventListener('click', () => {
        listElement.remove();
    });
    
    addText();
    addDeleteBuutton();
    }
});