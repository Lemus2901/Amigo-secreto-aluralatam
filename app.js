// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Agregar el nombre a la lista y al arreglo
    amigos.push(nombre);

    // Crear un nuevo elemento de la lista y agregarlo al DOM
    const li = document.createElement('li');
    li.textContent = nombre;
    li.classList.add('name-item'); // Clase opcional para estilos
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert('La lista está vacía. Por favor, agregue al menos un nombre.');
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en pantalla
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</p>`;
}
