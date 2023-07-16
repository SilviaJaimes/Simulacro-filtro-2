import { getRuta, postRuta, deleteRuta, putRuta, getInfoRuta, postPuntos, getPuntos, deletePunto, putPunto, getInfoPunto } from "./peticion.js";

let form = document.querySelector("#form");
let tbodyRegistro = document.querySelector("#tbodyRegistro");
let nombreRuta2 = document.querySelector("#nombreRuta2");
let formActualizar = document.querySelector('#formActualizar');

/* let botonListar = document.querySelector("#listar"); */

let form2 = document.querySelector("#form2");
let cardRegistroPunto = document.querySelector("#cardRegistroPunto");
let nombrePunto2 = document.querySelector("#nombrePunto2");
let formActualizarPuntos = document.querySelector("#formActualizarPuntos");

getRuta();
getInfoRuta();
getPuntos();
getInfoPunto();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let accion = e.submitter.dataset.accion

    if (accion === "registrar"){
        postRuta(data)
    }
});

getRuta();

/* botonListar.addEventListener('click', async (e) => {
    e.preventDefault();
    let accion = e.currentTarget.dataset.accion;

    if(accion === "listar"){
        getRuta();
    }
}); */

tbodyRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    let tr = e.target.closest("tr");
    let id = tr.id;
    let accion = e.target.dataset.accion;
    
    if(accion === "eliminar"){
        deleteRuta(tr,id);
        tr.remove();
    }
    else if(accion === "actualizar"){
        let tr2 = e.target.parentElement.parentElement.childNodes[3].innerText;
        nombreRuta2.value = tr2;

        formActualizar.addEventListener("submit", (e) => {
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));

            putRuta(data, id);
        });
    }
});

getRuta();

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let accion = e.submitter.dataset.accion

    if (accion === "registrarPunto"){
        postPuntos(data);
        form2.reset();
    }
});

cardRegistroPunto.addEventListener('click', (e) => {
    e.preventDefault();
    let div = e.target.closest("div");
    let id = div.id;
    let accion = e.target.dataset.accion;
    
    if(accion === "eliminar"){
        deletePunto(div, id);
        div.remove();
    }
    else if(accion === "actualizar"){
        let div = e.target.parentElement.parentElement.childNodes[5].innerText;
        nombrePunto2.value = div;

        formActualizarPuntos.addEventListener("submit", (e) => {
            e.preventDefault();

            let data = Object.fromEntries(new FormData(e.target));

            putPunto(data, id);
        });
    }
});

getPuntos();