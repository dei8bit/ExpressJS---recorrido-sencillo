const expressImport = require("express");
const app = expressImport();

const { personas } = require("../datos.js");

const routerApellidos = expressImport.Router();

routerApellidos.get("/", (req, res) => {res.send(personas.apellidos)});

//- Exportando el router:

//$ sintaxis 1:
// module.exports = routerApellidos;
//$ sintaxis 2:
module.exports.routerApellidos = routerApellidos;

