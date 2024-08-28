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

//Desarrollado por Alejandra Machuca, estudiante de CampusLands grupo T2