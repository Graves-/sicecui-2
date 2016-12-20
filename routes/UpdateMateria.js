var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//UPDATE DE MATERIA (tabla Materias) DE ACUARDO A LOS DATOS LLENADOS EN EL FORMULARIO
router.post('/', function(req,res) {
	var sql = "Update Materias SET Nombre='"+req.body.Nombre+"',Seriacion='"+req.body.Seriacion+"',HorasDoc="+req.body.HorasDoc+",HorasInd="+req.body.HorasInd+",Creditos="+req.body.Creditos+",Instalaciones='"+req.body.Instalaciones+"' WHERE MateriaID='"+req.body.MateriaID+"'";
	console.log(sql);

	connection.query(sql, function (err, result) {
	  if (err){
			console.log(err);
			res.render('500');
		}else{
			console.log(result);
			res.redirect('/modificaMateria');
		}
	});
});

module.exports = router;