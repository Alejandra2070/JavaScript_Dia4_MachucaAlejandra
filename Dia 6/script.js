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

//Ordenes

document.getElementById("button5").addEventListener("click",actualizarOrdenes);
function actualizarOrdenes(){
    fetch("info.json")
    const orderId1 = parseInt(document.getElementById("idOrden").value);
    const productId1 =(document.getElementById("idProducto").value);
    const quantity1 =(document.getElementById("cantidad").value);
    const price1 =(document.getElementById("precio").value);
    const orderDate1= parseInt(document.getElementById("fechaOrden").value);
    const status1=(document.getElementById("estatus").value);

    data.orders.push({orderId1, productId1, quantity1, price1, orderDate1, status1})
}

document.getElementById("button6").addEventListener("click",eliminarOrdenes);
function eliminarOrdenes(){

}

document.getElementById("button7").addEventListener("click",verOrdenes);
function verOrdenes(){
    fetch("info.json")
    .then(res=> res.json())
    .then(data => {
        let ordenes=data[0]["orders"];
        let output2=document.getElementById("output2");
        output2.innerHTML="";
        ordenes.forEach(orden => {
            document.getElementById("output2").innerHTML += `
            <p>Id de la orden: ${orden.orderId}</p>
            <p>Id del producto: ${orden.productId}</p>
            <p>Cantidad: ${orden.quantity}</p>
            <p>Precio: ${orden.price}</p>
            <p>Fecha de la orden: ${orden.orderDate}</p>
            <p>Estatus: ${orden.status}</p>
            `
        })
    })
}

//Proveedores

document.getElementById("button8").addEventListener("click",añadirProveedores);
function añadirProveedores(){
    fetch("info.json")
    const idDos1 = parseInt(document.getElementById("idProvee").value);
    const name1 =(document.getElementById("nameProvee").value);
    const phone1 =(document.getElementById("phonee").value);
    const email1 =(document.getElementById("emaill").value);
    const  address1= parseInt(document.getElementById("address1").value);

    data.orders.push({idDos1, name1, phone1, email1, address1})
}

document.getElementById("button9").addEventListener("click",actualizarProveedores);
function actualizarProveedores(){

}

document.getElementById("button10").addEventListener("click",eliminarProveedores);
function eliminarProveedores(){

}

document.getElementById("button11").addEventListener("click",verProveedores);
function verProveedores(){
    fetch("info.json")
    .then(res=> res.json())
    .then(data => {
        let proveedores=data[0]["suppliers"];
        let output3=document.getElementById("output3");
        output3.innerHTML="";
        proveedores.forEach(proveedor => {
            document.getElementById("output3").innerHTML += `
            <p>Id del proveedor: ${proveedor.id}</p>
            <p>Nombre del proveedor: ${proveedor.name}</p>
            <p>---Información de contacto---</p>
            <p>Número de teléfono: ${proveedor.contactInfo.phone}</p>
            <p>Email: ${proveedor.contactInfo.email}</p>
            <p>Dirección: ${proveedor.contactInfo.address}</p>
            `
        })
    })
}

//Desarrollado por Alejandra Machuca, estudiante de CampusLands grupo T2