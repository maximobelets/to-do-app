document.querySelector('.get-data__button').addEventListener('click', function() {
    var data = document.querySelector('.get-data__input').value;
    var listElement = document.createElement('li');
    var deleteButton = document.createElement('button');

    function addText () {
        var list = document.querySelector('.data__list');
        listElement.innerHTML = data;
        listElement.classList.add('data__item');
        list.appendChild(listElement);
    }

    function addDeleteBuutton () {
        deleteButton.classList.add('data__button');
        listElement.appendChild(deleteButton);
    }

    deleteButton.addEventListener('click', function() {
        listElement.remove();
    });
    
    addText();
    addDeleteBuutton();
});

addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        var data = document.querySelector('.get-data__input').value;
        var listElement = document.createElement('li');
        var deleteButton = document.createElement('button');

        function addText () {
            var list = document.querySelector('.data__list');
            listElement.innerHTML = data;
            listElement.classList.add('data__item');
            list.appendChild(listElement);
    }

    function addDeleteBuutton () {
        deleteButton.classList.add('data__button');
        listElement.appendChild(deleteButton);
    }

    deleteButton.addEventListener('click', function() {
        listElement.remove();
    });
    
    addText();
    addDeleteBuutton();
    }
});