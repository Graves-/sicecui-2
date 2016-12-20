var express = require('express');
var router = express.Router();
var connection = require('../Connection');

//OBTIENE TODOS LOS REGISTROS DE PAGOS QUE SE HAN LLEVADO A CABO
router.get('/', function (req, res) {
	//PARA LLEVAR A CABO UN SELECT EN LA BD
	connection.query("Select * from Año", function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));
	});
});

module.exports = router;