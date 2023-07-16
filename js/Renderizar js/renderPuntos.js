export default function renderPuntos(data){
    let cardRegistroPunto = document.querySelector("#cardRegistroPunto");

    cardRegistroPunto.innerHTML = "";

    data.forEach((punto) => {
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card" id="edicion-cards">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body texto-cards" id="${punto.id}">
                    <p><strong>Id del punto: </strong> ${punto.id} </p>
                    <p><strong>Id de la ruta: </strong> ${punto.idRuta} </p>
                    <p><strong>Nombre del punto: </strong> ${punto.nombrePunto} </p>
                    <center>
                        <input type="submit" data-accion="eliminar" value="Eliminar" class="btn btn-danger" id="eliminar">
                        <input type="button" data-bs-toggle="modal" data-bs-target="#modalPuntos"  data-accion="actualizar" value="Actualizar" class="btn btn-primary" id="actualizarDato">    
                    </center>
                </div>
            </div>
        `;

        cardRegistroPunto.appendChild(div);
    });
}