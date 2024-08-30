document.getElementById("boton").addEventListener("click", function () {
    let idStar = document.getElementById("idStar").value;

    fetch(`https://swapi.py4e.com/api/people/${idStar}`)
        .then(res => res.json())
        .then(data => {
            let archivos = `
            <table class="table">
                <thead>
                    <tr class="table-dark">
                    <th scope="col">Nombre:</th>
                    <td scope="col">${data.name}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-dark">
                    <th scope="row">Height:</th>
                    <td>${data.height}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Hair Color:</th>
                    <td>${data.hair_color}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Skin Color:</th>
                    <td>${data.skin_color}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Eyes Color:</th>
                    <td>${data.eye_color}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Birth year:</th>
                    <td>${data.birth_year}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Gender:</th>
                    <td>${data.gender}</td>
                    </tr>
                    <tr class="table-dark">
                    <th scope="row">Homeworld:</th>
                    <th>
                        <ul class="list-group">
                            <li class="list-group-item">${data.homeworld}
                            </li>
                        </ul>
                    </th>
                </tbody>
            </table>`
            document.getElementById("output").innerHTML = archivos
        })

})