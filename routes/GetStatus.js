var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//OBTIENE LOS STATUS QUE PUEDEN TENER LOS ALUMNO
router.get('/', function(req,res) {
	connection.query("select * from StatusAlumno", function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});

module.exports = router;