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