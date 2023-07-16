export default function renderSelectRuta(data){
    let selectRuta2 = document.querySelector("#selectRuta2");

    selectRuta2.innerHTML = "";

    let option = document.createElement("option");
    option.innerText = "Seleccione la ruta";
    selectRuta2.appendChild(option);

    data.forEach((ruta) => {
        let option = document.createElement("option");
        option.setAttribute("value", `${ruta.id}`);
        option.innerHTML = `
            ${ruta.nombreRuta}
        `;

        selectRuta2.appendChild(option);
    });
}