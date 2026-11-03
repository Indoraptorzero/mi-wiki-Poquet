// Indice automático
const indice = document.querySelector('#indice');
const subtitulos = document.querySelectorAll('#articulo h2');

subtitulos.forEach(function (subtitulo) {
    const elemento = document.createElement('li');
    const enlace = document.createElement('a');

    enlace.textContent = subtitulo.textContent;
    enlace.href = '#' + subtitulo.id;

    elemento.append(enlace);
    indice.append(elemento);
});

// Modo oscuro
const cuerpo = document.querySelector('body');
const botonModo = document.querySelector('#boton-modo');

botonModo.addEventListener('click', function () {
    cuerpo.classList.toggle('modo-oscuro');

    if (cuerpo.classList.contains('modo-oscuro')) {
        botonModo.textContent = 'Modo claro';
    } else {
        botonModo.textContent = 'Modo oscuro';
    }
});

// Tamaño del texto
const articulo = document.querySelector('#articulo');
const botonesTamano = document.querySelectorAll('.boton-tamano');

botonesTamano.forEach(function (boton) {
    boton.addEventListener('click', function () {
        articulo.classList.remove('tamano-pequeno', 'tamano-estandar', 'tamano-grande');
        articulo.classList.add(boton.id);

        botonesTamano.forEach(function (otroBoton) {
            otroBoton.classList.remove('seleccionado');
        });

        boton.classList.add('seleccionado');
    });
});

// Secciones plegables
subtitulos.forEach(function (subtitulo) {
    subtitulo.addEventListener('click', function () {
        subtitulo.parentElement.classList.toggle('plegada');
    });
});