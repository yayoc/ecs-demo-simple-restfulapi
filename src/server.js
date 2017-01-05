var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'Hello, World!', version: '2.0' });
});

app.use('/api', router);

app.use(function(req, res, next) {
  var error = new Error('Cannot ' + req.method + ' ' + req.path);
  error.status = 404;
  next(error);
});

app.listen(port);
console.log('Starting server.js on port ' + port);
