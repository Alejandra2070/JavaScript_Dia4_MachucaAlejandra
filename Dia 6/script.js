//Productos

console.log("Holiiii")
document.getElementById("button1").addEventListener("click", añadirProductos);
function añadirProductos() {
    fetch("info.json")
        .then(res => res.json())
        .then(data => {
            for (data in ["products"][0]) {
                const ProductId = parseInt(document.getElementById("id1").value);
                const name = (document.getElementById("nombre1").value);
                const category = (document.getElementById("categoria1").value);
                const price = (document.getElementById("precio1").value);
                const quantityInStock = parseInt(document.getElementById("cantidad1").value);
                const supplierId = (document.getElementById("idProv1").value);
                data.products.push({ ProductId, name, category, price, quantityInStock, supplierId })
            }
        })
}


//document.getElementById("button2").addEventListener("click",actualizarProductos);

fetch("info.json")
    .then(res => res.json())
    .then(data => {

        function actualizarProductos() {
            let filtrar = parseInt(document.getElementById("filtrar").value);
            output4.innerHTML = "";
            let contador = false;
            for (let i of data[0].products) {
                if (i["id"] === filtrar) {

                    output4.innerHTML += `<h3>Id: ${i["id"]}
                <h3> Name: ${i["name"]}
                <h3> Category: ${i["category"]}
                <h3> Precio: ${i["price"]}
                <h3> Cantidad: ${i["quantityInStock"]}
                <h3> Id Proveedor: ${i["supplierId"]}`
                    contador = true

                    buttonActualizar.addEventListener("click", (e) => {
                        let nuevoPrecio = parseInt(document.getElementById("actualizarPro").value);
                        i.price = nuevoPrecio
                        actualizarProductos()
                    })

                }
            }

            if (!contador) {
                output4.innerHTML = "no encontrado"
            }
        }
        button2.addEventListener("click", (e) => {
            actualizarProductos()
            document.getElementById("filtrar").style.display = "none"
            document.getElementById("button2").style.display = "none"
            document.getElementById("actualizarPro").style.display = "block"
            document.getElementById("buttonActualizar").style.display = "block"

        })

    })




document.getElementById("button3").addEventListener("click", eliminarProductos);
function eliminarProductos() {
    let personaData = {};

    fetch("info.json")
        .then(res => res.json())
        .then(data => {
            personaData = data;
            console.log("Datos en el json: ", personaData);
        })
    const keyToDelete = parseInt(document.getElementById("keyToDelete").value);
    const index = personaData.findIndex(persona => persona.id === keyToDelete);
    if (index !== -1) {
        personaData.splice(index, 1);
    }
    if (keyToDelete in personaData) {
        delete personaData[keyToDelete];
    }
}

document.getElementById("button4").addEventListener("click", verProductos);
function verProductos() {
    fetch("info.json")
        .then(res => res.json())
        .then(data => {
            let productos = data[0]["products"];
            let output = document.getElementById("output");
            output.innerHTML = "";
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

//document.getElementById("button5").addEventListener("click",actualizarOrdenes);
fetch("info.json")
    .then(res => res.json())
    .then(data => {
        function actualizarOrdenes() {
            let idOrder = parseInt(document.getElementById("idOrder").value);
            output.innerHTML = "";
            let cont = false;
            for (let i of data[0].orders) {
                if (i["orderId"] === idOrder) {
                    output.innerHTML += `<h3>Id de la orden: ${i["orderId"]}
                <h3>Id del producto: ${i["productId"]}
                <h3> Cantidad: ${i["quantity"]}
                <h3> Precio: ${i["price"]}
                <h3> Fecha de la orden: ${i["orderDate"]}
                <h3> Estatus: ${i["status"]}`
                    cont = true

                    buttonActualizarOrd.addEventListener("click", (e) => {
                        let nuevoPrecioOrd = parseInt(document.getElementById("actualizarOrd").value);
                        i.price = nuevoPrecioOrd
                        actualizarOrdenes()
                    })
                }
            }
        }
        if (!cont) {
            output.innerHTML = "No encontrado"
        }
    })


/*    fetch("info.json")
        .then(res=> res.json())
        .then(data => {
            
        function actualizarOrdenes(){
            let idOrder = parseInt(document.getElementById("idOrder").value);
            output.innerHTML = "";
            let contador = false;
            for (let i of data[0].orders){
                if (i["orderId"] === idOrder ){

                output.innerHTML += `<h3>Id: ${i["orderId"]}
                <h3> Id del producto: ${i["productId"]}
                <h3> Cantidad: ${i["quantity"]}
                <h3> Precio: ${i["price"]}
                <h3> Fecha de la orden: ${i["orderDate"]}
                <h3> Estatus: ${i["status"]}`
                contador = true
                
                buttonActualizarOrd.addEventListener("click", (e) => {
                    let nuevoPrecioOrd = parseInt(document.getElementById("actualizarOrd").value);
                    i.price = nuevoPrecioOrd
                    actualizarOrdenes()
                })
                
            }
            
        }
        if (!contador){
            output.innerHTML = "no encontrado"
        }
        
    }
    button5.addEventListener("click", (e) => {
        actualizarOrdenes()
        document.getElementById("idOrder").style.display = "none"
        document.getElementById("button5").style.display = "none"
        document.getElementById("actualizarOrd").style.display = "block"
        document.getElementById("buttonActualizarOrd").style.display = "block"
    })
            
})*/

document.getElementById("button7").addEventListener("click", verOrdenes);
function verOrdenes() {
    fetch("info.json")
        .then(res => res.json())
        .then(data => {
            let ordenes = data[0]["orders"];
            let output2 = document.getElementById("output2");
            output2.innerHTML = "";
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

document.getElementById("button8").addEventListener("click", añadirProveedores);
function añadirProveedores() {
    fetch("info.json")
    const idDos1 = parseInt(document.getElementById("idProvee").value);
    const name1 = (document.getElementById("nameProvee").value);
    const phone1 = (document.getElementById("phonee").value);
    const email1 = (document.getElementById("emaill").value);
    const address1 = parseInt(document.getElementById("address1").value);

    data.orders.push({ idDos1, name1, phone1, email1, address1 })
}

document.getElementById("button9").addEventListener("click", actualizarProveedores);
function actualizarProveedores() {

}

document.getElementById("button10").addEventListener("click", eliminarProveedores);
function eliminarProveedores() {

}

document.getElementById("button11").addEventListener("click", verProveedores);
function verProveedores() {
    fetch("info.json")
        .then(res => res.json())
        .then(data => {
            let proveedores = data[0]["suppliers"];
            let output3 = document.getElementById("output3");
            output3.innerHTML = "";
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