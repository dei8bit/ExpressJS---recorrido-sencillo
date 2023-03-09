const expressImport = require("express");
const app = expressImport();

const { personas } = require("../datos.js");

const routerNombres = expressImport.Router();

routerNombres.get('/',(req,res)=>{res.send(personas.nombres)})

//- Exportando el router:

//$ sintaxis 1:
// module.exports = routerNombres;
//$ sintaxis 2:
module.exports.routerNombres = routerNombres;
