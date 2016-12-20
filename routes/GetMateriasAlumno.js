var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//OBTIENE LAS MATERIAS QUE PUEDE CURSAR EL ALUMNO ESPECIFICADO (tablas Persona y Materias)
router.get('/', function (req, res) {
	//PARA LLEVAR A CABO UN SELECT EN LA BD
	connection.query("select * from Materias where CuatrimestreID = "+req.query.cuat+" and CarreraID = '"+req.query.carrera+"'", function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});

module.exports = router;