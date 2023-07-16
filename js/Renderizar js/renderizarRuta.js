export default function renderizarRuta (data){
    let selectRuta = document.querySelector("#selectRuta");

    selectRuta.innerHTML = "";

    let option = document.createElement("option");
    option.innerText = "Seleccione la ruta";
    selectRuta.appendChild(option);

    data.forEach((ruta) => {
        let option = document.createElement("option");
        option.setAttribute("value", `${ruta.id}`);
        option.innerHTML = `
            ${ruta.nombreRuta}
        `;

        selectRuta.appendChild(option);
    });
}