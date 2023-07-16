import mostrar from "./mostrar.js";
import renderizarRuta from "./Renderizar js/renderizarRuta.js"
import renderPuntos from "./Renderizar js/renderPuntos.js";
import renderSelectRuta from "./Renderizar js/renderSelectRuta.js"

let url = "http://localhost:3000";

let headers = new Headers ({'Content-Type': 'application/json'});

/* Get ruta */
export async function getRuta(){
    let data = await(await fetch(`${url}/ruta`)).json();
    mostrar(data);
};

/* Post ruta */
export async function postRuta(data){
    let configuracion = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    let rutas = await(await fetch(`${url}/ruta`, configuracion)).json();
};

/* Delete ruta */
export async function deleteRuta(tr, id){
let data = Object.fromEntries(new FormData(tr.target));

let configuracion = {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify(data)
}

let puntos = await(await fetch(`${url}/puntos?idRuta=${id}`)).json();

for(const punto of puntos){
    let puntoId = punto.id;
    let configuracionPunto = {
        method: 'DELETE',
        headers: headers
    }

    let delPunto = await(await fetch(`${url}/puntos/${puntoId}`, configuracionPunto)).json();
}

let del = await(await fetch(`${url}/ruta/${id}`, configuracion)).json();
}

/* Put ruta */
export async function putRuta(data, id){
    let configuracion = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    };

    let act = await(await fetch(`${url}/ruta/${id}`, configuracion)).json();
}

/* Información ruta, actualizar */
export async function getInfoRuta(){
    let data = await(await fetch(`${url}/ruta`)).json();
    renderizarRuta(data);
} 


/* Get puntos */
export async function getPuntos(){
    let data = await(await fetch(`${url}/puntos`)).json();
    renderPuntos(data);
};

/* Post puntos */
export async function postPuntos(data){
    let configuracion = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    };

    let puntos = await(await fetch(`${url}/puntos`, configuracion)).json();
};

/* Delete puntos */
export async function deletePunto(div, id){
    let data = Object.fromEntries(new FormData(div.target));

    let configuracion = {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    };

    let del = await(await fetch(`${url}/puntos/${id}`, configuracion)).json();
};

/* Put puntos */
export async function putPunto(data, id){
    let configuracion = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    };

    let act = await(await fetch(`${url}/puntos/${id}`, configuracion)).json();
};

/* Información puntos, actualizar */
export async function getInfoPunto(){
    let data = await(await fetch(`${url}/ruta`)).json();
    renderSelectRuta(data);
}