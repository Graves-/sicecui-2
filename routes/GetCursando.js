var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//OBTIENE DE TALLES DE LAS LISTAS DE CADA MATERIA
router.get('/', function(req,res) {
	connection.query("select * from Cursando c join Materias m on c.MateriaID=m.MateriaID where AlumnoID = " + req.query.AlumnoID, function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});

module.exports = router;