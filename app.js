var express = require('express');

var app = express();
app.use(express.logger());
app.use(express.bodyParser());

app.get('/', function (req, res) {
	res.send('it\'s a secret to everybody');
});

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

app.listen(3000);
console.log('YAY http://localhost:3000/');