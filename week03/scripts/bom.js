const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

// Muestra los capítulos guardados en el localStorage al cargar la página
console.log('Capítulos guardados al cargar:', chaptersArray);

// Rellena la lista inicial desde el localStorage
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value); // Agrega el capítulo al array
        setChapterList(); // Actualiza localStorage
        input.value = ''; // Limpia la entrada
        input.focus(); // Enfoca el input
    } else {
        alert('Por favor, ingrese un libro y capítulo.');
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Elimina el capítulo del array y localStorage
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    console.log('Capítulos actualizados:', chaptersArray); // Muestra los capítulos actuales
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Quita el ❌
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Filtra el capítulo eliminado
    setChapterList(); // Actualiza localStorage
    console.log('Capítulo eliminado:', chapter); // Muestra el capítulo eliminado
}
