var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//OBTIENE DETALLES E INFORMACION DEL MAESTRO DE LA TABLA Persona
router.get('/', function(req,res) {
	//PARA LLEVAR A CABO UN SELECT EN LA BD - de una persona en específico
	var sql = 'select * from Persona where PersonaID = ' + req.query.id + ' and PerfilID = 2';
	console.log(sql);
	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});

module.exports = router;