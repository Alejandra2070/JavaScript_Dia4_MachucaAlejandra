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
          },
          {
            "id": 2,
            "name": "Smartphone",
            "category": "Electronics",
            "price": 999,
            "quantityInStock": 20,
            "supplierId": 101
          }
        ]
    } 
]
var supplier=[
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
console.log("4. Gestión de existencias")
console.log("5. Gestión de informes")
console.log("6. Búsqueda y filtrado de productos")
console.log("7. Búsqueda y filtrado de pedidos")
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
            id=prompt("Ingresa el id del producto que deseas eliminar: ")
            for (const i of productos[0]["products"]){
                if (id==i["id"]){
                    [products].pop()
                    console.log(products)
                }
            }
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
    o=prompt("Elige una de estas opciones: ")
    if (o==1){
        function viewSuppliers(){
            for (var ver of productos[0]["products"]){
                console.log("ID:",ver.id)
                console.log("Nombre del proveedor:",ver.name)
                console.log("Número de teléfono:",ver.phone)
                console.log("Email:",ver.email)
                console.log("Dirección:",ver.address)
            }
        }
        console.log(viewSuppliers())
    }
    if (o==2){
        function addSupplier(supplier){
            let id=prompt("Ingresa el id del proveedor: ")
            let name=prompt("Ingresa el nombre del proveedor: ")
            let phone=prompt("Ingresa el número de teléfono del proveedor: ")
            let email=prompt("Ingresa el email del proveedor: ")
            let address=prompt("Ingresa la dirección del proveedor: ")
            supplier[0]["suppliers"].push({"id": id, "name": name, "phone": phone, "email": email, "address": address})
            console.log(supplier)
        }
        console.log(addSupplier())
    }
    if (o==3){
        function deleteSupplier(id){
            [supplier].pop()
            console.log(supplier)
        }
        console.log(deleteSupplier)
    }
    if (o==4){
        function updateSupplier(id, newDetails){
            id=prompt("Ingresa el id del proveedor al que quieres actualizar la información: ")
            for (const i of supplier[0]["suppliers"]){
                if (id==i["id"]){
                    console.log("1. Id")
                    console.log("2. Nombre")
                    console.log("3. Número de teléfono")
                    console.log("4. Email")
                    console.log("5. Dirección")
                    newDetails=prompt("Qué deseas actualizar del proveedor?: ")
                    if (newDetails==1){
                        let id=prompt("Ingresa el nuevo id: ")
                        i["id"]=id
                    }
                    if (newDetails==2){
                        let name=prompt("Ingresa el nuevo nombre del proveedor: ")
                        i["name"]=name
                    }
                    if (newDetails==3){
                        let phone=prompt("Ingresa el nuevo número de teléfono: ")
                        i["phone"]=phone
                    }
                    if (newDetails==4){
                        let email=prompt("Ingresa el nuevo email del proveedor: ")
                        i["email"]=email
                    }
                    if (newDetails==5){
                        let address=prompt("Ingresa la nueva direción del proveedor: ")
                        i["address"]=address
                    }
                }
            }
        }
        console.log(updateSupplier())
    }
}
if (opc==3){
    console.log("----Esta es la Gestión de pedidos----")
    console.log("1. Ver pedidos")
    console.log("2. Eliminar pedidos")
    console.log("3. Actualizar pedidos")
    p=prompt("Elige una de nuestras opciones: ")
    if (p==1){
        function viewOrders(){
            for (var ver of ordenes[0]["orders"]){
                console.log("Id de la orden:",ver.orderId)
                console.log("Id del producto:",ver.productId)
                console.log("Cantidad del producto:",ver.quantity)
                console.log("Fecha de la orden:",ver.orderDate)
                console.log("Estatus de la orden:",ver.status)
            }
        }
        console.log(viewOrders())
    }
    if (p==2){
        function deleteOrder(orderId){
            [ordenes].pop()
            console.log(ordenes)
        }
    }
    if (p==3){
        function updateOrder(orderId, newDetails){
            orderId=prompt("Ingresa el id de la orden a la que quieres actualizar la información: ")
            for (const i of ordenes[0]["orders"]){
                if (orderId==i["orderId"]){
                    console.log("1. Id de la orden")
                    console.log("2. Id del producto")
                    console.log("3. Cantidad del producto")
                    console.log("4. Fecha de la orden")
                    console.log("5. Estatus del pedido")
                    r=prompt("Elige una de estas opciones: ")
                    if (r==1){
                        let orderId=prompt("Ingresa el nuevo id de la orden: ")
                        i["orderId"]=orderId
                    }
                    if (r==2){
                        let productId=prompt("Ingresa el nuevo id del producto: ")
                        i["productId"]=productId
                    }
                    if (r==3){
                        let quantity=prompt("Ingresa la nueva cantidad del producto: ")
                        i["quantity"]=quantity
                    }
                    if (r==4){
                        let orderDate=prompt("Ingresa la nueva fecha de la orden: ")
                        i["orderDate"]=orderDate
                    }
                    if (r==5){
                        let status=prompt("Ingresa el estatus de la orden: ")
                        i["status"]=status
                    }
                }
            }
        }
    }
}
if (opc==4){
    console.log("1. Ver productos con poco stock")
    console.log("2. Aumentar nivel de stock de un producto")
    s=prompt("Elige una de estas opciones: ")
    if (s==1){
        function checkStockLevels(){
            for (var verProd of productos[0]["products"]){
                if (verProd.quantityInStock<21){
                    console.log("Estos son los productos con poco stock: ")
                    console.log("ID:",verProd.id)
                    console.log("Nombre del producto:",verProd.name)
                    console.log("Categoría del producto:",verProd.category)
                    console.log("Precio del producto:",verProd.price)
                    console.log("Cantidad en stock:",verProd.quantityInStock)
                    console.log("Id del proveedor del producto:",verProd.supplierId)
                }
            }
        }
        console.log(checkStockLevels())
    }
    else if (s==2){
        function restockProduct(id, quantity){
            id=prompt("Ingresa el id del producto al que quieres agregar más cantidad en stock: ")
            for (var quantity of productos[0]["products"]){
                if (id==quantity.id){
                    let quantityInStock=prompt("Ingrese la nueva cantidad en stock del producto: ")
                    quantity["quantityInStock"]=quantityInStock
                }
            }
        }
        console.log(restockProduct())
    }
}
if (opc==5){
    function generateSalesReport(){
        console.log("1. Número total de pedidos")
        console.log("2. Ingresos totales generados")
        console.log("3. Desglose de ventas por productos")
        console.log("4. Informe de todos los productos")
        m=prompt("Elige una de estas opciones: ")
        if (m==1){
            fecha=prompt("Ingresa la fecha en que quieres revisar el número de pedidos: ")
            pedidos=ordenes[0]["orders"].filter(pedido=>pedido.orderDate==fecha)
            total=pedidos.length
            console.log("Este es el número total de pedidos: ",total)
        }
        else if(m==2){
            sumaTotal=0
            for (var ing of pedidos){
                if (ing.orderDate==fecha){
                    console.log("Id de la orden:",ing.orderId)
                    console.log("Id del producto:",ing.productId)
                    console.log("Cantidad:",ing.quantity)
                    console.log("Fecha de la orden:",ing.orderDate)
                    search=ing.productId

                    for (var ingr of productos[0]["products"]){
                        if (ingr.id==search){
                            total=ingr.quantity*ingr.price
                            sumaTotal=+total
                        }
                    }
                }
            }
            console.log("Este fue el total de los ingresos: ",sumaTotal)
        }
        else if(m==3){}
        else if(m==4){
            function generateInventoryReport(){
                for (var ver of productos[0]["products"]){
                    console.log("Este es el informe de todos los productos: ")
                    console.log("ID:",ver.id)
                    console.log("Nombre del producto:",ver.name)
                    console.log("Categoría del producto:",ver.category)
                    console.log("Precio del producto:",ver.price)
                    console.log("Cantidad en stock del producto:",ver.quantityInStock)
                    console.log("Id del proveedor del producto:",ver.supplierId)
                    valor=ver.quantityInStock*ver.price
                    console.log("El valor total de la cantidad en stock es de: ",valor)
                }
            }
            console.log(generateInventoryReport())
        }
    }
    console.log(generateSalesReport())
}
if(opc==6){
    function searchProducts(query){
        console.log("1. Nombre")
        console.log("2. Categoría")
        console.log("3. Proveedor")
        query=prompt("Estos son los datos con los que puedes realizar búsquedas. Elige una opción: ")
        if (query==1){
            nombre=prompt("Ingresa el nombre del producto que deseas buscar: ")
            for (var ver of productos[0]["products"]){
                if (nombre==ver.name){
                    console.log("ID:",ver.id)
                    console.log("Nombre del producto:",ver.name)
                    console.log("Categoría:",ver.category)
                    console.log("Precio:",ver.price)
                    console.log("Cantidad en stock:",ver.quantityInStock)
                    console.log("Id del proveedor:",ver.supplierId)
                }
            }
        }
        else if (query==2){
            categoria=prompt("Ingresa la categoría del producto que quieres buscar: ")
            for (var ver of productos[0]["products"]){
                if (categoria==ver.category){
                    console.log("ID:",ver.id)
                    console.log("Nombre del producto:",ver.name)
                    console.log("Categoría:",ver.category)
                    console.log("Precio:",ver.price)
                    console.log("Cantidad en stock:",ver.quantityInStock)
                    console.log("Id del proveedor:",ver.supplierId)
                }
            }
        }
        else if (query==3){
            proveedor=prompt("Ingresa el id del proveedor del producto: ")
            for (var ver of productos[0]["products"]){
                if (proveedor==ver.supplierId){
                    console.log("ID:",ver.id)
                    console.log("Nombre del producto:",ver.name)
                    console.log("Categoría:",ver.category)
                    console.log("Precio:",ver.price)
                    console.log("Cantidad en stock:",ver.quantityInStock)
                    console.log("Id del proveedor:",ver.supplierId)
                }
            }
        }
    }
    console.log(searchProducts())
}
if (opc==7){
    function filterOrders(criteria){
        console.log("1. EStado")
        console.log("2. Fechas")
        console.log("3. Producto")
        criteria=prompt("Estos son los datos con los que puedes realizar búsquedas. Elige una opción: ")
        if (criteria==1){
            for (var ver of ordenes[0]["orders"]){
                estado=prompt("Ingresa el estado de la orden que quieres buscar: ")
                if (estado==ver.status){
                    console.log("Id de la orden:",ver.orderId)
                    console.log("Id del producto:",ver.productId)
                    console.log("Cantidad del producto:",ver.quantity)
                    console.log("Fecha de la orden:",ver.orderDate)
                    console.log("Estatus de la orden:",ver.status)
                }
            }
        }
        else if (criteria==2){
            for (var ver of productos[0]["products"]){
                fecha=prompt("Ingresa la fecha de la orden que quieres buscar: ")
                if (fecha==ver.orderDate){
                    console.log("Id de la orden:",ver.orderId)
                    console.log("Id del producto:",ver.productId)
                    console.log("Cantidad del producto:",ver.quantity)
                    console.log("Fecha de la orden:",ver.orderDate)
                    console.log("Estatus de la orden:",ver.status)
                }
            }
        }
        else if (criteria==3){
            for (var ver of productos[0]["products"]){
                producto=prompt("Ingresa el id del producto que está en la orden que quieres buscar: ")
                if (producto==ver.productId){
                    console.log("Id de la orden:",ver.orderId)
                    console.log("Id del producto:",ver.productId)
                    console.log("Cantidad del producto:",ver.quantity)
                    console.log("Fecha de la orden:",ver.orderDate)
                    console.log("Estatus de la orden:",ver.status)
                }
            }
        }
    }
}
//Desarrollado por Alejandra Machuca Grupo T2