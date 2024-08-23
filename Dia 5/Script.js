var productos=[
    {
        "products": [
          {
            "id": 1,
            "name": "Laptop",
            "category": "Electronics",
            "price": 999.99,
            "quantityInStock": 50,
            "supplierId": 101
          }
        ]
    } 
]
var proveedores=[
    {
        "suppliers": [
      {
        "id": 101,
        "name": "Tech Supplies Inc.",
        "contactInfo": {
          "phone": "123-456-7890",
          "email": "sales@techsupplies.com",
          "address": "123 Tech Lane, Silicon Valley, CA"
        }
      }
        ]
    }
]
var ordenes=[
    {
        "orders": [
      {
        "orderId": 1001,
        "productId": 1,
        "quantity": 5,
        "orderDate": "2024-08-23",
        "status": "Delivered"
      }
    ]
    }
]

console.log("----Bienvenidossss----")
console.log("1. Gestión de productos")
console.log("2. Gestión de proveedores")
console.log("3. Gestión de pedidos")
opc=prompt("Elige una de las opciones de nuestro menú: ")
if (opc==1){
    console.log("---Esta es la gestión de productos---")
    console.log("1. Ver productos")
    console.log("2. Añadir productos")
    console.log("3. Eliminar productos")
    console.log("4. Actualizar productos")
    x=prompt("Elige una de estas opciones: ")
    if (x==1){
        function viewProducts(){
            for (var ver of productos[0]["products"]){
                console.log("ID:",ver.id)
                console.log("Nombre del producto:",ver.name)
                console.log("Categoría:",ver.category)
                console.log("Precio:",ver.price)
                console.log("Cantidad en stock:",ver.quantityInStock)
                console.log("Id del proveedor:",ver.supplierId)
            }
        }
        console.log(viewProducts())
    }
    if (x==2){
        function addProduct(productos){
            let id=prompt("Ingresa el id del producto: ")
            let name=prompt("Ingresa el nombre del producto: ")
            let category=prompt("Ingresa la categoría del producto: ")
            let price=prompt("Ingresa el precio del producto: ")
            let quantityInStock=prompt("Ingresa la cantidad en stock del producto: ")
            let supplierId=prompt("Ingresa el id del proveedor del producto: ")
            productos[0]["products"].push({"id": id, "name": name, "category": category, "price": price, "quantityInStock": quantityInStock, "supplierId":supplierId})
            console.log(productos)
        }
        console.log(addProduct(product))
    }
    if (x==3){
        function deleteProduct(id){
            [productos].pop()
            console.log(productos)
        }
    }
    if (x==4){
        function updateProduct(id, newDetails){
            id=prompt("Ingresa el id del producto al que quieres actualizar información: ")
            for (const i of productos[0]["products"]){
                if (id==i["id"]){
                    console.log("1. Id")
                    console.log("2. Nombre")
                    console.log("3. Categoría")
                    console.log("4. Precio")
                    console.log("5. Cantidad en stock")
                    console.log("6. Id del proveedor")
                    newDetails=prompt("Qué deseas actualizar?: ")
                    if (newDetails==1){
                        let id=prompt("Ingresa el nuevo id: ")
                        i["id"]=id
                    }
                    if (newDetails==2){
                        let name=prompt("Ingresa el nuevo nombre del producto: ")
                        i["name"]=name
                    }
                    if (newDetails==3){
                        let category=prompt("Ingresa la nueva categoría del producto: ")
                        i["category"]=category
                    }
                    if (newDetails==4){
                        let price=prompt("Ingrese el nuevo precio del producto: ")
                        i["price"]=price
                    }
                    if (newDetails==5){
                        let quantityInStock=prompt("Ingrese la nueva cantidad en stock: ")
                        i["quantityInStock"]=quantityInStock
                    }
                    if (newDetails==6){
                        let supplierId=prompt("Ingrese el nuevo id del proveedor: ")
                        i["supplierId"]=supplierId
                    }
                }
            }
        }
        console.log(updateProduct(id, newDetails))
    }
}
if(opc==2){
    console.log("----Esta es la gestión de proveedores")
    console.log("1. Ver proveedores")
    console.log("2. Añadir proveedores")
    console.log("3. Eliminar proveedores")
    console.log("4. Actualizar información de los proveedores")
}