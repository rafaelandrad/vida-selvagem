function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

function apareceTexto (idElementoTexto) {
    document.querySelector(idElementoTexto).style.opacity = '100%';
}

const listaAnimais = document.querySelectorAll('.animal');

for (let contador = 0; contador < listaAnimais.length; contador++) {

    const animal = listaAnimais[contador];
    const nomeAnimal = animal.classList[1];
    const idAudio = `#som_${nomeAnimal}`;
    const idTexto = `#txt_${nomeAnimal}`;

    animal.onclick = function() {
        tocaSom(idAudio);
        apareceTexto(idTexto);
    }
}



