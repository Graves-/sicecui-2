var express = require('express');
var router = express.Router();
var connection = require('../Connection');


//OBTIENE LA LISTA DE TODOS LOS ALUMNOS EN LA TABLA Persona EN LA BD
router.get('/', function (req, res) {

	if (req.query.nombre === undefined) {
		//PARA LLEVAR A CABO UN SELECT EN LA BD - de la lista de alumnos
		connection.query('select p.PersonaID,p.Nombre,ApellidoPeterno,ApellidoMaterno,s.Nombre as Status,Telefono,municipio,Entidad,Direccion,CURP,Trabaja,Email,c.CarreraID,c.Nombre as NombreCarrera, CuatrimestreID from persona p left join carrera c on c.CarreraID=p.CarreraID join StatusAlumno s on p.StatusID=s.StatusID where PerfilID = 1', function(err, rows, fields) {
		  if (err) throw err;
		  res.send(JSON.stringify(rows));
		});
	}else{
		connection.query("select PersonaID from persona where PerfilID = 1 and CarreraID = '"+req.query.carrera+"' and Nombre='"+req.query.nombre+"' and ApellidoPeterno='"+req.query.apepat+"' and ApellidoMaterno='"+req.query.apemat+"'", function(err, rows, fields) {
		  if (err) throw err;
		  res.send(JSON.stringify(rows));
		});
	}
});


module.exports = router;