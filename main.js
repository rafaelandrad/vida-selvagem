function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaAnimais = document.querySelectorAll('.animal');

for (let contador = 0; contador < listaAnimais.length; contador++) {

    const animal = listaAnimais[contador];
    const nomeAnimal = animal.classList[1];
    const idAudio = `#som_${nomeAnimal}`;

    animal.onclick = function() {
        tocaSom(idAudio);
    }
}

