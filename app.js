// REQUIRE NECESARIOS
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

// DECLARA TODAS LAS RUTAS DEL PROYECTO
var Login = require('./routes/Login');
var index = require('./routes/index');
var users = require('./routes/users');
var ListaAlumnos = require('./routes/ListaAlumnos');
var ListaMaestros = require('./routes/ListaMaestros');
var ListaMaterias = require('./routes/ListaMaterias');
var InscripcionMaestro = require('./routes/InscripcionMaestro');
var InscripcionAlumno = require('./routes/InscripcionAlumno');
var AsignarMaterias = require('./routes/AsignarMaterias');
var Kardex = require('./routes/Kardex');
var Pagos = require('./routes/Pagos');
var ModificaAlumno = require('./routes/ModificaAlumno');
var ModificaMaestro = require('./routes/ModificaMaestro');
var ModificaMateria = require('./routes/ModificaMateria');
var ModificaCarrera = require('./routes/ModificaCarrera');
var GetAlumnos = require('./routes/GetAlumnos');
var GetMaestros = require('./routes/GetMaestros');
var GetMaterias = require('./routes/GetMaterias');
var GetCarreras = require('./routes/GetCarreras');
var InsertAlumno = require('./routes/InsertAlumno');
var GetStatus = require('./routes/GetStatus');
var InsertMaestro = require('./routes/InsertMaestro');
var InsertPago = require('./routes/InsertPago');
var GetPagos = require('./routes/GetPagos');
var GetPersonaAlumno = require('./routes/GetPersonaAlumno');
var GetMateriasAlumno = require('./routes/GetMateriasAlumno');
var GetCursando = require('./routes/GetCursando');
var InsertCursando = require('./routes/InsertCursando');
var UpdateAlumno = require('./routes/UpdateAlumno');
var UpdateMaestro = require('./routes/UpdateMaestro');
var GetPersonaMaestro = require('./routes/GetPersonaMaestro');
var UpdateMateria = require('./routes/UpdateMateria');
var UpdateCarrera = require('./routes/UpdateCarrera');
var GetMeses = require('./routes/GetMeses');
var GetAnios = require('./routes/GetAnios');
var Authenticate = require('./routes/Authenticate');

// INICIALIZACION DE EXPRESS
var app = express();

// SEGURIDAD
app.disable('x-powered-by');
// SESSION
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// VIEW ENGINE SETUP - HANDLEBARS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

// PARA EL RENDER DE LA PAGINA DE ACUERDO A LA RUTA
app.use('/', Login);
app.use('/home', index);
app.use('/users', users);
app.use('/listaAlumnos',ListaAlumnos);
app.use('/listaMaestros',ListaMaestros);
app.use('/listaMaterias',ListaMaterias);
app.use('/inscripcionMaestros',InscripcionMaestro);
app.use('/inscripcionAlumno',InscripcionAlumno);
app.use('/asignarMaterias',AsignarMaterias);
app.use('/kardex',Kardex);
app.use('/pagos',Pagos);
app.use('/modificaAlumno', ModificaAlumno);
app.use('/modificaMaestro', ModificaMaestro);
app.use('/modificaMateria',ModificaMateria);
app.use('/modificaCarrera',ModificaCarrera);
app.use('/getAlumnos',GetAlumnos);
app.use('/getMaestros', GetMaestros);
app.use('/getMaterias', GetMaterias);
app.use('/getCarreras', GetCarreras);
app.use('/getStatus', GetStatus);
app.use('/insertAlumno', InsertAlumno);
app.use('/insertMaestro', InsertMaestro);
app.use('/insertPago', InsertPago);
app.use('/getPagos', GetPagos);
app.use('/getPersonaAlumno', GetPersonaAlumno);
app.use('/getMateriasAlumno', GetMateriasAlumno);
app.use('/getCursando', GetCursando);
app.use('/insertCursando', InsertCursando);
app.use('/updateAlumno', UpdateAlumno);
app.use('/updateMaestro', UpdateMaestro);
app.use('/getPersonaMaestro', GetPersonaMaestro);
app.use('/updateMateria', UpdateMateria);
app.use('/updateCarrera', UpdateCarrera);
app.use('/getMeses', GetMeses);
app.use('/getAnios', GetAnios);
app.use('/auth', Authenticate);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// EXPORTA APP EN MODULO PARA www
module.exports = app;
