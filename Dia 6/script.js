//Productos

console.log("Holiiii")
document.getElementById("button1").addEventListener("click",añadirProductos);
function añadirProductos(){
    fetch("info.json")
    .then(res=> res.json())
    .then(data => {
        for (data in ["products"][0]){
            const ProductId = parseInt(document.getElementById("id1").value);
            const name =(document.getElementById("nombre1").value);
            const category =(document.getElementById("categoria1").value);
            const price =(document.getElementById("precio1").value);
            const  quantityInStock= parseInt(document.getElementById("cantidad1").value);
            const  supplierId=(document.getElementById("idProv1").value);
            data.products.push({ProductId, name, category, price, quantityInStock, supplierId})
        }
    })
}

document.getElementById("button2").addEventListener("click",actualizarProductos);
function actualizarProductos(){

}

document.getElementById("button3").addEventListener("click",eliminarProductos);
function eliminarProductos(){
    let personaData= {};

    fetch("info.json")
    .then(res => res.json())
    .then(data => {
        personaData = data;
        console.log("Datos en el json: ", personaData);
    })
    const keyToDelete = parseInt(document.getElementById("keyToDelete").value);
    const index = personaData.findIndex(persona => persona.id === keyToDelete);
    if (index !== -1){
        personaData.splice(index, 1);
    }
    if (keyToDelete in personaData){
        delete personaData[keyToDelete];
    }
}

document.getElementById("button4").addEventListener("click",verProductos);
function verProductos(){
    fetch("info.json")
    .then(res=> res.json())
    .then(data => {
        let productos=data[0]["products"];
        let output=document.getElementById("output");
        output.innerHTML="";
        productos.forEach(product => {
            document.getElementById("output").innerHTML += `
            <p>Id: ${product.id}</p>
            <p>Nombre: ${product.name}</p>
            <p>Categoría: ${product.category}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: ${product.quantityInStock}</p>
            <p>Id del proveedor: ${product.supplierId}</p>
            `
        })
    })
}

//Desarrollado por Alejandra Machuca, estudiante de CampusLands grupo T2