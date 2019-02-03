document.querySelector('.add-button').addEventListener('click', function() {
    var data = document.querySelector('.get-data').value;

    function addText () {
        var list = document.querySelector('.main-list');
        var listElement = document.createElement('li');
        listElement.innerHTML = data;
        list.appendChild(listElement);
    }
    
    addText();
});