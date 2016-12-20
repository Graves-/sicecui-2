var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//INSERTA ALUMNO EN LA BD (en tabla Persona) DE ACUERDO A LOS DETALLES DEL FORMULARIO LLENADO POR EL USUARIO
router.post('/',function(req,res){
	//PARA INSERTAR DATOS EN LA BD MEDIANTE UN OBJETO
	var persona  = {
		Nombre: req.body.Nombre,
		ApellidoPeterno : req.body.ApellidoPeterno,
		ApellidoMaterno : req.body.ApellidoMaterno,
		Telefono : req.body.Telefono,
		municipio : req.body.municipio,
		Entidad : req.body.Entidad,
		Direccion :  req.body.Direccion,
		CURP : req.body.CURP,
		Email : req.body.Email,
		PerfilID : 1,
		CuatrimestreID : req.body.CuatrimestreID,
		StatusID : req.body.StatusAlumno,
		CarreraID: req.body.CarreraID,
		Trabaja: req.body.Trabaja
	};
	var query = connection.query('INSERT INTO Persona SET ?', persona, function(err, result) {
		if (err){
			console.log(err);
			res.render('500');
		}else{
			console.log(result);
			res.redirect('/inscripcionAlumno');
		}
	});
	console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL' 
});

module.exports = router;