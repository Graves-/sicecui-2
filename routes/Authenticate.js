var express = require('express');
var router = express.Router();
var connection = require('../Connection');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

app.use(session({
    secret: 'codetutorialsecret',
    resave:true,
    saveUninitialized:true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

passport.use(new LocalStrategy({passReqToCallback : true },
  function(response, password, done) {
  	var usr = response.body.username;
  	var psw = response.body.password;

  	var sql = "select COUNT(PersonaID) as Res from Usuarios where Usuario='"+usr+"' and Password = md5('" + psw + "')";

	connection.query(sql, function(err, rows, fields) {
	  if (err) throw err;
	  console.log('res: ' + rows[0].Res);
	  if (rows[0].Res <= 0){
	  	return done();
	  }
	  return 'failed';
	});
  }
));

passport.serializeUser(function(user, done) {
	console.log('KHEEEEE ' + user);
  	done(null, user.id);
});

passport.deserializeUser(function(user, done) {
	console.log('juaaaatt ' + user);
    done(null, user);
});


/*
router.post('/',function(req,res){

	var credentials  = {
		Usuario: req.body.Usuario,
		Password: req.body.Password
	};

	connection.query("select COUNT(PersonaID) as Res from Usuarios where Usuario='"+credentials.Usuario+"' and Password = md5('" + credentials.Password + "')", function(err, rows, fields) {
	  if (err) throw err;
	  if (rows[0].Res) {
	  	res.redirect('/home');
	  }
	  else { res.redirect('/')}
	});
});
*/

router.post('/',
  passport.authenticate('local', { successRedirect: '/home',
                                   failureRedirect: '/',
                                   failureFlash: true })
);

module.exports = router;