document.getElementById("boton").addEventListener("input", ver)
function ver(){
    var e = document.getElementById("boton").value;
    var revisar = "https://pokeapi.co/api/v2/pokemon/"+e
    leer(revisar)
}
function leer(revisar){
    fetch(revisar)
    .then(res=>res.json())
    .then(data => {
        pasos=data.sprites.other.showdown.front_default
        Name=data.name
        id=data.id
        document.getElementById("output").innerHTML=""
        document.getElementById("output").innerHTML+=`
        <img src="${pasos}">
        ${Name}
        ${id}
        `
    }) 
}