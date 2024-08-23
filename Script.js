var informacion = [
    {
        "informacion_personal": [
            {
                "nombre": "juan",
                "edad": 30,
                "calle": "Calle Principal",
                "numero": 123,
                "ciudad": "Ciudad Ejemplo",
                "correo": "juan.perez@example.com",
                "telefono": "+123456789"
            }
        ]
    }
]
const historial = [
    {
        "historial_educativo": [
            {
            "nivel": "Secundaria",
            "institucion": "Instituto Secundario",
            "anio_inicio": 2000,
            "anio_fin": 2005
            },
            {
            "nivel": "Universidad",
            "institucion": "Universidad Ejemplar",
            "titulo": "Licenciatura en Ciencias",
            "anio_inicio": 2006,
            "anio_fin": 2010
            }
        ]
    }
]
const experiencia = [
    {
        "experiencia_laboral": [
            {
            "puesto": "Desarrollador de Software",
            "empresa": "Tech Solutions",
            "periodo": "2010-2015",
            "responsabilidades": [
            "Desarrollo de aplicaciones web",
            "Mantenimiento de bases de datos"
            ]
            },
            {
            "puesto": "Gerente de Proyectos",
            "empresa": "Proyectos Avanzados",
            "periodo": "2016-actualidad",
            "responsabilidades": [
            "Planificación y supervisión de proyectos",
            "Coordinación de equipos"
            ]
            }
        ]
    }
]


console.log("--------Menú--------")
console.log("1. Información personal")
console.log("2. Historial educativo")
console.log("3. Experiencia laboral")
opc=prompt("Elige una de nuestras opciones: ")
if (opc==1){
    console.log("---Información personal---")
    console.log("1. Ver información")
    console.log("2. Actualizar información")
    console.log("3. Eliminar datos")
    console.log("4. Agregar información")
    x=prompt("Elige una opción: ")
    if (x==1){
        for (var infor of informacion[0]["informacion_personal"]){
            console.log("Nombre:",infor["nombre"])
            console.log("Edad:",infor["edad"])
            console.log("Dirección:")
            console.log("Calle:",infor["calle"])
            console.log("Número:",infor["numero"])
            console.log("Ciudad:",infor["ciudad"])
            console.log("Información de Contacto:")
            console.log("Correo:",infor["correo"])
            console.log("Teléfono:",infor["telefono"])
        }
            
    }
    if (x==2){
        nombre1=prompt("Ingresa el nombre del usuario al que quieres actualizar la información: ")
        for(const i of informacion[0]["informacion_personal"]){
            if (nombre1==i["nombre"]){
                console.log("1. Nombre", "2. Edad", "3. Calle", "4. Número", "5. Ciudad", "6. Correo", "7. Teléfono");
                v=prompt("Qué deseas actualizar?");
                if (v==1){
                    let nombre=prompt("Ingresa el nuevo nombre: ")
                    i["nombre"]=nombre
                }
                if (v==2){
                    let edad=prompt("Ingresa la edad: ")
                    i["edad"]=edad
                }
                if (v==3){
                    let calle=prompt("Ingresa la nueva calle: ")
                    i["calle"]=calle
                }
                if (v==4){
                    let numero=prompt("Ingresa el nuevo número de residencia: ")
                    i["numero"]=numero
                }
                if (v==5){
                    let ciudad=prompt("Ingresa la ciudad: ")
                    i["ciudad"]=ciudad
                }
                if (v==6){
                    let correo=prompt("Ingresa el nuevo correo: ")
                    i["correo"]=correo
                }
                if (v==7){
                    let telefono=prompt("Ingresa el nuevo número de teléfono: ")
                    i["telefono"]=telefono
                }
            }
            console.log(informacion[0]["informacion_personal"][0])
        }
    }
    if (x==3){
        [informacion].pop()
        console.log(informacion)
    }
    if (x==4){
        let nombre = prompt("Ingrese el nombre: ")
        let edad = prompt("Ingrese la edad de la persona: ")
        let calle = prompt("Ingrese la calle de residencia de la persona: ")
        let numero = prompt("Ingrese el número de la residencia: ")
        let ciudad = prompt("Ingrese la ciudad de seridencia de la persona: ")
        let correo = prompt("Ingrese el correo de la persona: ")
        let telefono = prompt("Ingrese el número de teléfono de la persona: ")
        informacion[0]["informacion_personal"].push({"nombre": nombre, "edad": edad, "calle": calle, "numero": numero, "ciudad": ciudad, "correo": correo, "telefono": telefono})
        console.log(informacion)
    }
}
else if (opc==2){
    console.log("---Historial educativo---")
    console.log("1. Ver información")
    console.log("2. Eliminar datos")
    console.log("3. Agregar información")
    p=prompt("Elige una de las opciones: ")
    if (p==1){
        for (var histo of historial[0]["historial_educativo"]){
            console.log("Nivel:",histo["nivel"])
            console.log("Institución:",histo["institucion"])
            console.log("Año de inicio:",histo["anio_inicio"])
            console.log("Año de finalización:",histo["anio_fin"])
        }
    }
    if (p==2){
        [historial].pop()
        console.log(historial)
    }
    if (p==3){
        let nivel = prompt("Ingrese el nivel de estudio: ")
        let institucion = prompt("Ingrese el nombre de la institución en la que estudió: ")
        let anio_inicio = prompt("Ingrese el año en que entró a estudiar: ")
        let anio_fin = prompt("Ingrese el año en que finalizó su estudio: ")
        historial[0]["historial_educativo"].push({"nivel": nivel, "institucion": institucion, "anio_inicio": anio_inicio, "anio_fin": anio_fin})
        console.log(historial)
    }
}
else if (opc==3){
    console.log("---Experiencia laboral---")
    console.log("1. Ver información")
    console.log("2. Eliminar datos")
    console.log("3. Agregar información")
    c=prompt("Elige una de estas opciones: ")
    if (c==1){
        for (var exp of experiencia[0]["experiencia_laboral"]){
            console.log("Puesto:",exp["puesto"]);
            console.log("Empresa:",exp["empresa"]);
            console.log("Período:",exp["periodo"]);
            console.log("Responsabilidades:",exp["responsabilidades"])
        }
    }
    if (c==2){
        [experiencia].pop()
        console.log(experiencia)
    }
    if (c==3){
        let puesto = prompt("Ingresa el puesto de la persona: ")
        let empresa = prompt("Ingresa el nombre de la empresa en la que trabajó la persona: ")
        let periodo = prompt("Ingresa el periodo de duración de la persona: ")
        let responsabilidades = prompt("Ingresa las responsabilidades de la persona: ")
        experiencia[0]["experiencia_laboral"].push({"puesto": puesto, "empresa": empresa, "periodo": periodo, "responsabilidades": responsabilidades})
        console.log(experiencia)
    }
}

//Desarrollado por Alejandra Machuca Grupo T2