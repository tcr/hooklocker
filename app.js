var express = require('express');

var app = express();
app.use(express.logger());
app.use(express.bodyParser());

// shhhhh

app.get('/', function (req, res) {
	res.send('it\'s a secret to everybody');
});

// hooks

var submissions = {};

app.post('/:name', function (req, res) {
	(submissions[req.params.name] = submissions[req.params.name] || []).push({
		time: new Date(),
		body: req.body
	});
	res.json({"success": true});
});

app.get('/:name', function (req, res) {
	res.json(submissions[req.params.name] || []);
});

// serve it

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});