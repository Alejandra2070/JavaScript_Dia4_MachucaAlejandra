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