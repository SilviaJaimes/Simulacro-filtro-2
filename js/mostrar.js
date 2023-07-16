export default function mostrar(data){
    let tbodyRegistro = document.querySelector("#tbodyRegistro");

    tbodyRegistro.innerHTML = "";

    data.forEach((ruta) => {
        let tr = document.createElement('tr');
        tr.setAttribute("id", `${ruta.id}`);
        tr.setAttribute("class", "tr");

        tr.innerHTML = `
        <td> ${ruta.id} </td>
        <td> ${ruta.nombreRuta} </td>
        <td>
            <input type="submit" data-accion="eliminar" value="Eliminar" class="btn btn-danger" id="eliminar">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="actualizar" value="Actualizar" class="btn btn-primary" id="actualizarDato">
        </td>
        `;

        tbodyRegistro.appendChild(tr);
    });
};