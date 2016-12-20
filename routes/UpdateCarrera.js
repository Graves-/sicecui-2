var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//UPDATE DE CARRERA (tabla Carrera) DE ACUARDO A LOS DATOS LLENADOS EN EL FORMULARIO
router.post('/', function(req,res) {
	var sql = "Update Carrera SET Nombre='"+req.body.Nombre+"' WHERE CarreraID='"+req.body.CarreraID+"'";
	console.log(sql);

	connection.query(sql, function (err, result) {
	  if (err){
			console.log(err);
			res.render('500');
		}else{
			console.log(result);
			res.redirect('/modificaCarrera');
		}
	});
});

module.exports = router;