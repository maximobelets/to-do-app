document.querySelector('.add-button').addEventListener('click', function() {
    var data = document.querySelector('.get-data').value;
    var listElement = document.createElement('li');
    var deleteButton = document.createElement('button');

    function addText () {
        var list = document.querySelector('.main-list');
        listElement.innerHTML = data;
        list.appendChild(listElement);
    }

    function addDeleteBuutton () {
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = 'Delete';
        listElement.appendChild(deleteButton);
    }

    deleteButton.addEventListener('click', function() {
        listElement.remove();
    });
    
    addText();
    addDeleteBuutton();
});