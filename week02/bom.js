const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    // Verificar que la entrada no esté vacía
    if (input.value !== '') {
        // Crear el elemento li
        const li = document.createElement('li');
        
        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Establecer el texto del li con el valor del input
        li.textContent = input.value;

        // Agregar el botón de eliminar al li
        li.append(deleteButton);

        // Agregar el li a la lista
        list.append(li);

        // Agregar un oyente de eventos para eliminar el elemento
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // Limpiar el campo de entrada y enfocarlo
        input.value = '';
        input.focus();
    } else {
        // Mostrar un mensaje si el campo de entrada está vacío
        alert('Por favor, ingrese un libro y capítulo.');
        input.focus();
    }
});
