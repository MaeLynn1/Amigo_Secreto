
let amigos = [];



function agregarAmigo() {
    const input = document.getElementById('amigo');
    let nombre = input.value.trim();
    nombre = nombre.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        limpiarCampo();
        return;
    }else if (amigos.includes(nombre)) {
        alert("El nombre se repite, ingrese otro distinto!");
        limpiarCampo();
        return;
    }
    amigos.push(nombre);
    limpiarCampo();
    eliminarAmigo(nombre);
}


function eliminarAmigo(nombre) {
    const lista = document.getElementById('listaAmigos');

    // Crear elemento li
    const elementoLista = document.createElement('li');
    elementoLista.textContent = nombre;

    // Crear botón de eliminación
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '✖';
    botonEliminar.classList.add('delete-button');

    botonEliminar.onclick = function () {
        lista.removeChild(elementoLista);

        // Remover del array
        amigos = amigos.filter(amigo => amigo !== nombre);
        // console.log(amigos);
    };

    // Agregar botón dentro del li
    elementoLista.appendChild(botonEliminar);
    lista.appendChild(elementoLista);

    // Limpiar el input después de agregar
    input.value = "";
}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

/*function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    if (amigos.length === 0) {
        listaAmigos.innerHTML = '<li>No hay amigos en la lista.</li>';
        return;
    }

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i]+" ";
        listaAmigos.appendChild(li);

    }

}*/

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoElegido = amigos[amigoAleatorio];
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = `Nuestro amigo secreto es: <br> ${amigoElegido}`;

// Efecto de confeti
function dispararConfeti() {
    var count = 200;
    var defaults = { 
      origin: { y: 0.7 } };
  
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }
  
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }
  
    // Llamar a la función para activar confeti 
    dispararConfeti(); 
                  
    } else {
        alert("La lista de amigos está vacía!");
        return;
    }
}

function reiniciarJuego() {
    
    amigos = [];

    // Limpia la lista visual
    document.getElementById('listaAmigos').innerHTML = '';

    // Limpia el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';

    // Limpia el campo de entrada
    document.querySelector('#amigo').value = '';

    alert('El juego ha sido reiniciado.');
}