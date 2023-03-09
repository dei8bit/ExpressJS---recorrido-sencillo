//# importar express:
// const expressImport = require("express");
//# Usar express:
// + Para usar express necesitamos tener una constante que almacene el servidor y "escucharlo" en algun puerto

// const app = expressImport();
//$ sintaxis 1:

// app.listen(3000);

//$ sintaxis 2:
// * Puerto desde variables de ambiente:  const PUERTODINAMICO = process.env.PORT || 3000;

// const PUERTO = 3000;
// app.listen(PUERTO,(req,res)=>{console.log(`Servidor escuchando en puerto ${PUERTO}`);});




//# ROUTING:
//+ El routing es el proceso mediante el cual se determinan acciones para las diferentes partes de una URL.

///Para "rutear" necesitamos definir: app.METHOD(PATH, HANDLER)


// app.get("/", (req, res) => {res.send('Primer server 💛');});



//# rutas URL:
// const { gods } = require("./datos");

// app.get("/", (req, res) => {res.send("HOME PRINCIPAL");});
// app.get("/api/", (req, res) => {res.send("Bienvenido a la api de dioses griegos y egipcios 👿😈");});
// app.get("/api/dioses", (req, res) => {res.send(gods)});
// app.get("/api/dioses/griegos", (req, res) => {res.send(gods.griegos)});
// app.get("/api/dioses/egipcios", (req, res) => {res.send(gods.egipcios)});

// console.log(gods);
// console.log(gods.griegos);
// console.log(gods.egipcios);


//# response:
//+ Response es el objeto recibido como parametro que se usa para enviar una respuesta al cliente.

//_ Responder texto:
// app.get('/inicio',(req,res)=>{res.send('Has ingresado a inicio')})

//_ Responder un archivo:
// app.get('/archivo',(req,res)=>{
//   res.sendFile('./meditar.png',{
//     root: __dirname
//     });
// });
//_ Responder un json:
// app.get("/json", (req, res) => {
//   res.json({ clave: "valor" });
// });
//_ Responder Codigos de estado:
//$ Ejemplo 1:
// app.get("/estado200", (req, res) => {res.status(200)});
// app.get("/estado200", (req, res) => {res.sendStatus(200)});
// app.get("/estado200", (req, res) => {res.status(200).end("todo ok")});
//$ Ejemplo 2:

// app.get("/estado300", (req, res) => {res.status(300)});
// app.get("/estado300", (req, res) => {res.sendStatus(300)});
// app.get("/estado300", (req, res) => {res.status(300).end("todo ok")});

//$ Ejemplo 3:
// app.get("/estado400", (req, res) => {res.status(400)});
// app.get("/estado400", (req, res) => {res.sendStatus(400)});
// app.get("/estado400", (req, res) => {res.status(400).end("todo ok")});



//# REQUEST  PARAMS :
//+ Permiten generalizar parte de una URL.

//$ Ejemplo 1:
// const expressImport = require("express");
// const app = expressImport();

// app.get("/carpeta1/:loQueSea", (req, res) => {
//   console.log(req.params);
//   console.log(req.params.loQueSea);
//   res.send("hola");
// });

// const PUERTO = 3000;
// app.listen(PUERTO,(req,res)=>{console.log(`Servidor escuchando en puerto ${PUERTO}`);});

//$ Ejemplo 2:
// app.get('/inicio/:a/:b',(req,res)=>{
//   console.log(req.params.a);
//   console.log(req.params.b);
//   res.send(`${req.params.a} y ${req.params.b}`);
//   const valorA = req.params.a;
//   console.log(typeof(valorA));
//   console.log(typeof(req.params.b));
// })
//$ Ejemplo 3:
//+ usando destructuring objects:

// app.get("/:algo/:a/:b", (req, res) => {
//   const { a, b } = req.params;
//   console.log(a);
//   console.log(b);
//   console.log(typeof a);
//   console.log(typeof b);
//   res.send(` suma de ${a} + ${b} = ${parseInt(a) + parseInt(b)}`);
//   console.log(typeof a);
//   console.log(typeof b);
// });

//$ Ejemplo 4:

// const expressImport = require("express");
// const app = expressImport();

// const { gods } = require("./datos");

// app.get('/:cultura', (req, res) => {
//   const cult = req.params.cultura;
//   if (cult === "griegos") {res.send(gods.griegos)}
//   else if (cult === "egipcios") {res.send(gods.egipcios)}
//   else{res.status(404).send(`La cultura ${cult} no ha sido encontrada`)}

// });

// const PUERTO = 3000;
// app.listen(PUERTO,(req,res)=>{console.log(`Servidor escuchando en puerto ${PUERTO}`);});

//# REQUEST QUERY:
//+ Forman parte de las querys(consultas) de la URL  en el objeto request

//$Ejemplo 1.1:
//+ Viendo el contenido de una query
// app.get('/', (req, res) => {console.log(req.query)});

//$Ejemplo 1.2:
//+ Viendo el contenido de una query
// app.get('/', (req, res) => {console.log(req.query)});

//$Ejemplo 2:
//+ Accediendo a claves individuales de la propiedad query

// app.get('/', (req, res) => {
//   console.log(req.query.clave1);
//   console.log(req.query.clave2);
// });

//$Ejemplo 3:
//+ Agregando condicionales a querys.

// app.get("/productos", (req, res) => {
//   if (req.query.consulta === "precio") {
//     res.send("Enseguida le informamos el valor del producto");
//   } else {
//     res.send("Lo siento esa informacion no esta disponible");
//   }
// });
//$Ejemplo 4:

// const { gods } = require("./datos");

// app.get('/', (req, res) => {
//   // const cult = req.params.cultura;
//   // if (cult === "griegos") {res.send(gods.griegos)}
//   // else if (cult === "egipcios") {res.send(gods.egipcios)}
//   // else{res.status(404).send(`La cultura ${cult} no ha sido encontrada`)}
//   console.log(req.query);
//   res.send("HOME");

// });

//, Mas metodos con el objeto request:

//_ req.method:
// +Permite acceder al metodo HTTP utilizado

// app.get("/camino1/camino2", (req, res) => {
//   console.log(` El metodo usado es : ${req.method}`);
// });

//_ req.url:
// +Permite acceder a al URL utilizada

// app.get("/camino1/camino2", (req, res) => {
//   console.log(` La ruta visitada es : ${req.url}`);
// });

//# ALL METHOD:
//+ Permite generara una respuesta para todos los metodos HTPP en el URL indicado

// app.all('/',(req,res)=>{res.send('Buenas')});

//# USE:
//+ Permite definir un Middleware antes de enviar o recibir informacion al cliente o servidor.
//$ Ejemplo 1:
// app.use('/',(req,res,next)=>{
//   console.log('La peticion paso por aqui')
//   next()
// });

// app.get('/',(req,res)=>{res.send('Buenas')});

//$ Ejemplo 2.1:
// app.use("/inicio", (req, res, next) => {
//   console.log("La peticion paso por aqui previamente");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Buenas");
// });

//$ Ejemplo 2.2:
// app.use("/:cualquiercosa", (req, res, next) => {
//   console.log("La peticion paso por aqui");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("que tal");
// });


//# set:
//+ Permite guardar valores para usarlos en configuraciones:
/// de esta forma tenemos valores globales en el mismo lugar.
//$ Ejemplo 1:
// app.set('PUERTO', 3000);

// app.set('Server', 'Servidor con express');
// console.log(`${app.get('Server')} en puerto ${app.get('PUERTO')}`);

//$ Ejemplo 2:
// app.set('PUERTO', 3000);
// app.set('puerto', '3000');
// app.set('Server', 'Super Server');

// const PUERTO_NUMBER = app.get('PUERTO');
// const puerto_string = app.get('puerto');
// const servidor_name = app.get('Server');

// console.log(PUERTO_NUMBER);
// console.log(puerto_string);
// console.log(servidor_name);
// console.log(typeof(PUERTO_NUMBER));
// console.log(typeof(puerto_string));
// console.log(typeof(servidor_name));

//$ Ejemplo 3:

// //-configuraciones manuales con set:
// app.set("PUERTO", 3000);
// app.set("Server", "Server super Express");

// //-configuraciones reservadas con set:
// app.set("case sensitive routing", true);

// app.listen(
//   app.get("PUERTO"),
//   console.log(`${app.get("Server")} - port: ${app.get("PUERTO")}`)
// );

// app.get("/inicio", (req, res) => {
//   res.send("Funciona");
// });



//# ROUTERS:
// +Permiten reutilizar parte de una URL.

// const expressImport = require("express");
// const app = expressImport();
// const { productos} = require("./datos");

//-Definir el router:
// const routerNew = expressImport.Router();
//-Asignar el router:
// app.use('/productos',routerNew);
//- Usar el router: 
// routerNew.get('/',(req,res)=>{res.send(productos)});

//_ Usando el router con params.

// routerNew.get('/:algo',(req,res)=>{
//   prod = req.params.algo
//   if (prod ==='frutas') { res.send(productos.frutas)}
//   else if (prod ==='verduras') { res.send(productos.verduras)}
//   else { res.send(`el producto "${prod}" no se ha encontrado`)}
// });

//. ROUTERS en diferentes archivos:
// const PUERTO = 3000;
// app.listen(PUERTO,()=>{console.log(`Servidor escuchando en puerto ${PUERTO}`)});

// const expressImport = require("express");
// const app = expressImport();
// const {personas} = require("./datos.js");

// - Importando routers:
// const {routerNombres} = require("./routers/nombresRouter.js");
// const {routerApellidos} = require("./routers/apellidosRouter.js");

//-Asignando routers:
// app.use('/datos/nombres',routerNombres);
// app.use('/datos/apellidos',routerApellidos);

//- Usando los routers osea..."routing":

// app.get('/', (req, res) => {res.send('Bienvenido al servidor de nombres y apellidos ♥.')});
// app.get('/datos', (req, res) => {res.send(personas)});



//# METODOS HTTP:
// +Los metodos HTTP sirven para realiar operaciones CRUD

// const expressImport = require("express");
// const app = expressImport();

//. CRUD con Epress:
// app.get('/datos',(rea,res)=>{res.send('Leyendo datos')});
// app.post('/datos',(rea,res)=>{res.send('Agregando datos')});
// app.put('/datos',(rea,res)=>{res.send('Actualizando datos con put')});
// app.patch('/datos',(rea,res)=>{res.send('Actualizando datos con pathc')});
// app.delete('/datos',(rea,res)=>{res.send('borrando datos')});



//_sin routers:
// const {productosKiosco} = require("./datos.js");
// app.use(expressImport.json()); ///+ MIDDLEWARE PARA PROCESAR LOS CUERPOS DE LAS SOLICITUDES EN FORMATO JSON.

//. post:
// app.post('/productos',(req,res)=>{
//   let productoNuevo = req.body;   ///+extrayendo el cuerpo de la solicitud post
//   productosKiosco.push(productoNuevo);
//   res.send(productoNuevo);
// });

// app.get('/productos',(req,res)=>{
//   res.send(productosKiosco);
// });


//_con routers:
// const {productosKiosco} = require("./datos.js");
// app.use(expressImport.json()); ///+ MIDDLEWARE PARA PROCESAR LOS CUERPOS DE LAS SOLICITUDES EN FORMATO JSON.

//. post:
//. put:
//. patch:
//. delete:
// const {routerNombres} = require("./routers/nombresRouter.js");
// const {routerApellidos} = require("./routers/apellidosRouter.js");

// app.use('/datos/nombres',routerNombres);
// app.use('/datos/apellidos',routerApellidos);

//, Routing:
// app.get('/', (req, res) => {res.send('Bienvenido al servidor de nombres y apellidos ♥.')});

// app.get('/datos', (req, res) => {res.send((personas))});

// const PUERTO = 3000;
// app.listen(PUERTO, () => {
//   console.log(`Servidor escuchando en puerto ${PUERTO}`);
// });


//# static:
//+ Permite hacer uso de una carpeta entera de archivos. que a su vez es publica

// $ Ejemplo 1:
//+ Uso basico de static
// app.use(expressImport.static('./carpeta1')); /// importa todo de la "carpeta1"

//$ Ejemplo 2:
//+ Usando archivos estaticos en una URL definida
// app.use(('/archivos'),expressImport.static('./carpeta1')); /// importa toda la "carpeta1" en el URL indicado

//$ Ejemplo 3:
//+ Usando dos carpetas con diferentes URL
// app.use(('/archivos1'),expressImport.static('./carpeta1')); /// importa toda la "carpeta1" en el URL indicado
// app.use(('/archivos2'),expressImport.static('./carpeta2')); /// importa toda la "carpeta2" en el URL indicado


//_ IMPORTANDO PATH
// + Permite que express pueda trabajar con archivos que no estan en la carpeta raiz.
// var app = require('path');

// console.log(__dirname);




//# SIMULACION DE REST API:

//. import:
const exp = require("express");
const app = exp();

//. set:
app.set("PUERTO", 3000);
app.listen(app.get("PUERTO"),console.log(`Server in port: ${app.get("PUERTO")}`));


const productos = []; ///array vacio para elementos

//. Middleware:
app.use(exp.json()); ///transforma todo a json


// //_ post:
// //- ingresar elementos
app.post("/productos", (req, res) => {
  const nuevoProducto = { ...req.body, id: productos.length + 1 };
  productos.push(nuevoProducto);
  res.send(nuevoProducto);
});


// //_ get:
// //- obtener todos los elementos
app.get("/productos", (req, res) => {
  res.json(productos);
});

// //- obtener un elemento

app.get("/productos/:id", (req, res) => {

//$ sintaxis 1:
//+ Convirtiendo el valor a entero

const idSearch = productos.find((e) => e.id === parseInt(req.params.id)); 

//$ sintaxis 2:
//+ Usando una comparacion de igualdad no estricta

// const idSearch = productos.find((e) => e.id == req.params.id); 

//$ sintaxis 1:
//+ Devolviendo un Json como mensaje
  if (!idSearch)
    return res.status(404).json({
      mensaje: "producto no encontrado",
    });

  //$ sintaxis 2:
//+ Devolviendo texto simple.
  if (!idSearch) return res.status(404).send("producto no encontrado");
  res.json(idSearch);
});








