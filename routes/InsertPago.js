var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', function(req,res) {
	var fecha = new Date();

	if (req.query.PersonaID !== undefined) {
		var pago = {
			PersonaID: req.query.PersonaID,
			CantidadNum: req.query.CantidadNum,
			CantidadLetra: req.query.CantidadLetra,
			Concepto: req.query.Concepto,
			AnoID: fecha.getFullYear(),
			MesID: fecha.getMonth()+1,
			Dia: fecha.getDay()
		};
		console.log(pago);
		var query = connection.query('INSERT INTO Pagos SET ?', pago, function(err, result) {
			if (err){
				console.log(err);
				res.render('500');
			}else{
				console.log(result);
				res.redirect('/pagos');
			}
		});
	}else{
		console.log('PersonaID no definido.');
		res.redirect('/pagos?error=ID');
	}
});

module.exports = router;