var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//UPDATE DE ALUMNO (tabla Persona) DE ACUARDO A LOS DATOS LLENADOS EN EL FORMULARIO
router.post('/', function(req,res) {
	var sql = "UPDATE Persona SET Nombre='"+req.body.Nombre+"', ApellidoPeterno='"+req.body.ApellidoPeterno+"',ApellidoMaterno='"+req.body.ApellidoMaterno+"', StatusID = '"+req.body.StatusAlumno+"',Telefono='"+req.body.Telefono+"',municipio='"+req.body.municipio+"',Entidad='"+req.body.Entidad+"',Direccion='"+req.body.Direccion+"',CURP='"+req.body.CURP+"',Email='"+req.body.Email+"',CuatrimestreID="+req.body.CuatrimestreID+",CarreraID='"+req.body.CarreraID+"',Trabaja='"+req.body.Trabaja+"' WHERE PersonaID = " + req.body.PersonaID + " AND PerfilID = 1"
	console.log(sql);
	connection.query(sql, function (err, result) {
	  if (err){
			console.log(err);
			res.render('500');
		}else{
			console.log(result);
			res.redirect('/modificaAlumno');
		}
	});
});

module.exports = router;