var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var bcrypt = require('bcryptjs');
// -- MongoDB --
var db = require('../config/MongoConn');
var User = require('../models/User');
// -- Passport --
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// --------------
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

	console.log(persona);

	//Agregar Error handler
	var newUser = new User({
		Usuario: persona.Nombre + persona.ApellidoPeterno,
		Contrasena: 'hola',
		Email: persona.Email
	});

	User.createUser(newUser, function(err, user) {
		if (err) throw err;
		console.log(user);
	});

	req.flash('success_msg', 'Usuario registrado.');
	res.redirect('/home');

	/*
	var query = connection.query('INSERT INTO Persona SET ?', persona, function(err, result) {
		if (err){
			console.log(err);
			res.render('500');
		}else{
			console.log(result);
			res.redirect('/inscripcionAlumno');
		}
	});
	*/
});

passport.use(new LocalStrategy(
function(username, password, done) {
 User.getUserByUsername(username, function(err, user){
 	if(err) throw err;
 	if(!user){
 		return done(null, false, {message: 'Unknown User'});
 	}

 	User.comparePassword(password, user.password, function(err, isMatch){
 		if(err) throw err;
 		if(isMatch){
 			return done(null, user);
 		} else {
 			return done(null, false, {message: 'Invalid password'});
 		}
 	});
 });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = router;
