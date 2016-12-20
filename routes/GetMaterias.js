var express = require('express');
var router = express.Router();
var connection = require('../Connection');


//OBTIENE LOS DETALLES DE MATERIAS EN LA BD
router.get('/', function (req, res) {
	//PARA LLEVAR A CABO UN SELECT EN LA BD
	var sql = 'SELECT * FROM Materias';
	if (req.query.id != null) {
		sql = sql + " WHERE MateriaID = '" + req.query.id + "'";
	}
	console.log(sql);
	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});


module.exports = router;