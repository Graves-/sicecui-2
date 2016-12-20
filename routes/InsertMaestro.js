var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//INSERTA MAESTRO EN LA BD (en la tabla Persona) DE ACUERDO A LOS DETALLES DEL FORMULARIO LLENADO POR EL USUARIO
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
		RFC : req.body.RFC,
		CURP : req.body.CURP,
		Email : req.body.Email,
		PerfilID : 2,
		NombreBeneficiario : req.body.NombreBeneficiario,
		DireccionBeneficiario : req.body.DireccionBeneficiario
	};
	var query = connection.query('INSERT INTO Persona SET ?', persona, function(err, result) {
		if (err){
			console.log(err);
			res.render('500');
		}else{
			console.log(result);
			res.redirect('/inscripcionMaestros');
		}
	});
	console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL' 
});

module.exports = router;