const formEvento = document.getElementById('formEvento');

formEvento.addEventListener('submit', function (event) {

    event.preventDefault();
    const nomeEvento = document.getElementById('nomeEvento');
    const categoria = document.getElementById('categoria');
    const dataEvento = document.getElementById('dataEvento');
    const horaEvento = document.getElementById('horaEvento');
    const localEvento = document.getElementById('localEvento');
    const descricaoEvento = document.getElementById('descricaoEvento');
    const organizador = document.getElementById('organizador');
    const contato = document.getElementById('contato');
    const imagemEvento = document.getElementById('imagemEvento');


    console.log(nomeEvento)

    if (nomeEvento.value.trim() == "") {

        nomeEvento.classList.add("is-invalid");
        nomeEvento.classList.remove("is-valid");


    } else {

        nomeEvento.classList.add("is-valid");
        nomeEvento.classList.remove("is-invalid");

    }
    if (categoria.value == "") {

        categoria.classList.add("is-invalid");
        categoria.classList.remove("is-valid");


    } else {

        categoria.classList.add("is-valid");
        categoria.classList.remove("is-invalid");

    }
    
    if (dataEvento.value == "") {

        dataEvento.classList.add("is-invalid");
        dataEvento.classList.remove("is-valid");


    } else {

        dataEvento.classList.add("is-valid");
        dataEvento.classList.remove("is-invalid");

    }
    if (horaEvento.value == "") {

        horaEvento.classList.add("is-invalid");
        horaEvento.classList.remove("is-valid");


    } else {

        horaEvento.classList.add("is-valid");
        horaEvento.classList.remove("is-invalid");

    }
    if (localEvento.value.trim() == "") {

        localEvento.classList.add("is-invalid");
        localEvento.classList.remove("is-valid");


    } else {

        localEvento.classList.add("is-valid");
        localEvento.classList.remove("is-invalid");

    }
    if (descricaoEvento.value.trim() == "") {

        descricaoEvento.classList.add("is-invalid");
        descricaoEvento.classList.remove("is-valid");


    } else {

        descricaoEvento.classList.add("is-valid");
        descricaoEvento.classList.remove("is-invalid");

    }
    if (organizador.value.trim() == "") {

        organizador.classList.add("is-invalid");
        organizador.classList.remove("is-valid");


    } else {

        contato.classList.add("is-valid");
        contato.classList.remove("is-invalid");

    }
    if (contato.value.trim() == "") {

        contato.classList.add("is-invalid");
        contato.classList.remove("is-valid");


    } else {

        contato.classList.add("is-valid");
        contato.classList.remove("is-invalid");

    }

});