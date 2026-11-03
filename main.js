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

// Discusion
const formularioComentarios = document.querySelector('#formulario-comentarios');
const campoNombre = document.querySelector('#nombre');
const campoComentario = document.querySelector('#comentario');
const contadorCaracteres = document.querySelector('#contador-caracteres');
const avisoComentarios = document.querySelector('#aviso-comentarios');
const listaComentarios = document.querySelector('#lista-comentarios');

campoComentario.addEventListener('input', function () {
    contadorCaracteres.textContent = `${campoComentario.value.length} / 200`;
});

formularioComentarios.addEventListener('submit', function (evento) {
    evento.preventDefault();

    avisoComentarios.textContent = '';
    campoNombre.classList.remove('error');
    campoComentario.classList.remove('error');

    const nombre = campoNombre.value.trim();
    const comentario = campoComentario.value.trim();

    if (nombre === '') {
        avisoComentarios.textContent = 'Escribí tu nombre.';
        campoNombre.classList.add('error');
        return;
    }

    if (comentario.length < 10 || comentario.length > 200) {
        avisoComentarios.textContent = 'El comentario debe tener entre 10 y 200 caracteres.';
        campoComentario.classList.add('error');
        return;
    }

    agregarComentario(nombre, comentario);

    formularioComentarios.reset();
    contadorCaracteres.textContent = '0 / 200';
});

function agregarComentario(nombre, comentario) {
    const elemento = document.createElement('li');
    elemento.classList.add('comentario-publicado');

    const autor = document.createElement('strong');
    autor.textContent = nombre;

    const texto = document.createElement('p');
    texto.textContent = comentario;

    const botonBorrar = document.createElement('button');
    botonBorrar.type = 'button';
    botonBorrar.textContent = 'Borrar';
    botonBorrar.classList.add('borrar-comentario');

    elemento.append(autor);
    elemento.append(texto);
    elemento.append(botonBorrar);

    listaComentarios.append(elemento);
}

listaComentarios.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('borrar-comentario')) {
        evento.target.parentElement.remove();
    }
});