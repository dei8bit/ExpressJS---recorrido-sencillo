//. import:
const exp = require("express");
const app = exp();

//. set port:
app.listen(4000);

const catalogo = require("./catalogo.js");

//. Middleware:
app.use(exp.json()); ///transforma todo a json

//_ get:
// //- obtener todos los productos

app.get("/catalogo", (req, res) => {
  res.json(catalogo);
});

// //- obtener un solo producto

app.get("/catalogo/:id", (req, res) => {
  const idSearch = catalogo.productos.find((e) => e.id == req.params.id); ///Comparando IDentificador

  //+ En caso de  error o exito:
  if (!idSearch) return res.status(404).send("producto no encontrado");
  res.json(idSearch);
});

// //_ post:
//- ingresar productos

app.post("/catalogo", (req, res) => {
  const nuevoProducto = { ...req.body, id: catalogo.productos.length + 1 };
  catalogo.productos.push(nuevoProducto);
  res.send(nuevoProducto);
  console.log(req.body);
});

// //_ put:
// //- actualizar productos

app.put("/catalogo/:id", (req, res) => {
  
  const newData = req.body;
  
  //+ Encontrando el producto:
  const idSearch = catalogo.productos.find((e) => e.id == req.params.id);
  
  //+ Informando busqueda:
  if (!idSearch) return res.status(404).send("producto no encontrado");

  //+ Renovando La lista
  //$ metodo 1:
  //+REEMPLAZA TODO EL CONTENIDO  
  // const nuevoProducto = {
  //   id: parseInt(req.params.id),
  //   ...req.body
  // };

  // catalogo.productos[idSearch] = nuevoProducto;
  // res.send(catalogo.productos[idSearch]);
  
  //$ metodo 2:  
  //+REEMPLAZA SOLO LAS PROPIEDADES DEL BODY Y MANTIENE EL RESTO
  const nuevoProducto = catalogo.productos.map(p =>( p.id == req.params.id) ? {...p,...newData} : p );
  catalogo.productos = nuevoProducto;

  //+respuesta final: 
  res.send("actualizando productos");
});

//_ delete:
//- borrar productos

app.delete("/catalogo/:id", (req, res) => {
  //+ Encontrando el producto:
  const idSearch = catalogo.productos.find((e) => e.id == req.params.id);
  //+ Informando busqueda:
  if (!idSearch) return res.status(404).send("producto no encontrado");

  //+ Eliminando producto
  const nuevoArreglo = catalogo.productos.filter((a) => a.id !== idSearch.id);
  //+ Renovando La lista
  catalogo.productos = nuevoArreglo;
  res.send(nuevoArreglo);
});
