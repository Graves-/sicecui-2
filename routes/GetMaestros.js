var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//OBTIENE LOS DETALLES DE TODOS LOS MAESTROS DE LA TABLA Persona
router.get('/', function (req, res) {
	//PARA LLEVAR A CABO UN SELECT EN LA BD
	connection.query('SELECT * FROM Persona WHERE PerfilID = 2', function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});

module.exports = router;