var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//UPDATE DE MAESTRO (tabla Persona) DE ACUARDO A LOS DATOS LLENADOS EN EL FORMULARIO
router.post('/', function(req,res) {
	var sql = "UPDATE Persona SET Nombre='"+req.body.Nombre+"', ApellidoPeterno='"+req.body.ApellidoPeterno+"',ApellidoMaterno='"+req.body.ApellidoMaterno+"',Telefono='"+req.body.Telefono+"',municipio='"+req.body.municipio+"',Entidad='"+req.body.Entidad+"',Direccion='"+req.body.Direccion+"',CURP='"+req.body.CURP+"',Email='"+req.body.Email+"',RFC='"+req.body.RFC+"', NombreBeneficiario = '"+req.body.NombreBeneficiario+"', DireccionBeneficiario = '"+req.body.DireccionBeneficiario+"' WHERE PersonaID = " + req.body.PersonaID + " AND PerfilID = 2"
	console.log(sql);
	connection.query(sql, function (err, result) {
	  if (err){
			console.log(err);
			res.render('500');
		}else{
			console.log(result);
			res.redirect('/modificaMaestro');
		}
	});
});

module.exports = router;