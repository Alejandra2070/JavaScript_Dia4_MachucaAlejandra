var link = 'https://www.datos.gov.co/resource/9qqx-f753.json'
const info = document.getElementById("caja");

mostrar(link)

function mostrar(link){
    fetch(link)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            info.innerHTML = '';

            for (const i of data) {
                info.innerHTML +=`
                <div class="caja3">
                    <p class="code">Código dane: ${i.codigo_dane}</p>
                    <p class="muni">Municipio: ${i.municipio}</p>
                    <p class="name">Nombre geografico: ${i.nombre_geografico}</p>
                    <p class="id">Id: ${i.objectid}</p>
                    <p class="pap">${i.pap}</p>
                    <p class="descp">Descripción: ${i.descripcio}</p>
                    <p class="nameU">Nombre: ${i.nombre}</p>
                    <p class="type">Type: ${i.point.type}
                    <p class="coor">Coordenadas: ${i.point.coordinates}</p>
                    <p class="site">${i.tp_sitio}</p>
                </div>
                `;
            }
        });
    document.getElementById("input").addEventListener("keyup", e=> {
        const name = element.querySelector(".code").textContent.toLowerCase();
        const desc = element.querySelector(".descp").textContent.toLowerCase();
        if (name.includes(searchTerm) || desc.includes(searchTerm)){
            element.classList.remove("filtro");
        }
        else {
            element.classList.add("filtro");
        }
    })    
}
