// Creamos la colección e insertamos los productos


product1 = {
    "name": "Celular" ,
    "price":1000, 
    
}
product2 = {
    "name": "Monitor" ,
    "price":2000, 
    
}
product3 = {
    "name": "Tv 50" ,
    "price": 3000, 
    
}
product4 = {
    "name": "Licuadora" ,
    "price": 500, 
    
}
product5 = {
    "name": "Tostadora" ,
    "price": 250, 
    
}
product6 = {
    "name": "Heladera" ,
    "price": 4000 , 
    
}
product7 = {
    "name": "Lavarropas" ,
    "price": 3300, 
    
}
product8 = {
    "name": "Parlantes" ,
    "price": 960, 
    
}
product9 = {
    "name": "Aspiradora" ,
    "price": 1680, 
    
}
product10 = {
    "name": "Aire Acondicionado" ,
    "price": 4600,  
}

db.productos.insertMany([product1,product2,product3,product4,product5,product6,product7,product8,product9,product10])

// Creamos los mensajes e insertamos en una nueva colección

msj1= {
    "from":"Pepe",
    "msg":"Hola rey"
}
msj2= {
    "from":"Luis",
    "msg":"Llego en 10"
}
msj3= {
    "from":"Nicolas",
    "msg":"Como estás?"
}
msj4= {
    "from":"Florencia",
    "msg":"Compro algo?"
}
msj5= {
    "from":"Sofia",
    "msg":"A que hora salimos?"
}
msj6= {
    "from":"Ian",
    "msg":"Llego tarde"
}
msj7= {
    "from":"Maria",
    "msg":"Quien es Juan?"
}
msj8= {
    "from":"Gonzalo",
    "msg":"alta toxica"
}
msj9= {
    "from":"Nahuel",
    "msg":"Soy el 1"
}
msj10= {
    "from":"Cristian",
    "msg":"Sale un vinito"
}

db.mensajes.insertMany([msj1,msj2,msj3,msj4,msj5,msj6,msj7,msj8,msj9,msj10])


//Listar todos los documentos en cada colección

db.productos.find()
db.mensajes.find()

//Mostrar la cantidad de documentos almacenados en cada una de ellas

db.productos.countDocuments()
db.mensajes.countDocuments()

//Agregar un producto mas a la coleccion de productos

product11 = {
    "name": "Tablet",
    "price": 2670
}

db.productos.insertOne(product11)

//Realizar una consulta por nombre específico de producto

db.productos.find({name: {$eq:"Tablet"}})

//Listar todos los productos con precio menor a 1000

db.productos.find ({price: {$lt: 1000}})

//Listar todos los productos con precio entre 1000 y 3000

db.productos.find({
    $and: [
      {price:{$gte:1000}},
     {price: {$lte:3000} }
    ]
})

//Listar todos los productos con precio mayor a 3000

db.productos.find({
    price: {$gt: 3000}
})

//Traer solo el nombre del 3er producto mas barato

db.productos.find().skip(3).sort(
 
    {
        price: 1
    },
    ).limit(1)




//agregar stock: 100 a todos los productos

db.productos.updateMany(
    {},
    {
       $set:{
           stock:100
         } 
    }
)

//Cambiar el stock a 0 de todos los productos con precios mayores a 4000
// use mayor o igual porque solo tenía 1 productos mayor a 4000
db.productos.updateMany(
    {
        price:{$gte: 4000}
    },
    {
       $set:{
           stock:0
         } 
    }
)

//eliminar productos con precio menor a 1000
db.productos.deleteMany(
    {
        price:{$lt:1000}
    }
)

//crear un usuario que solo pueda leer la base de datos ecommerce y verificar q no pueda cambiar la información

//use admin;

db.createUser(
    {
        user: "pepe",
        pwd: "asd456",
        roles: [
            {role:"read", db:"ecommerce"}
        ]
    }
)

