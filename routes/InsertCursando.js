var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//INSERTA DATOS EN LA TABLA Cursando PARA INSCRIBIR A UN ALUMNO EN UNA MATERIA/CUATRIMESTRE
router.get('/', function(req,res) {
	var Cursando = {
		MateriaID : req.query.MateriaID,
		AlumnoID : req.query.PersonaID
	};
	var query = connection.query('INSERT INTO Cursando SET ?', Cursando, function(err, result) {
		if (err){
			console.log(err);
		}else{
			console.log(result);
			res.send("ok");
		}
	});
});

module.exports = router;