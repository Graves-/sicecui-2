var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//OBTIENE LA INFORMACION DE LAS CARRERAS QUE EXISTEN EN LA BD
router.get('/', function (req, res) {
	//PARA LLEVAR A CABO UN SELECT EN LA BD
	var sql = "SELECT * FROM Carrera";
	if (req.query.id != null) {
		sql = sql + " WHERE CarreraID = '" + req.query.id + "'";
	}
	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});

module.exports = router;