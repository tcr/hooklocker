var express = require('express');
var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;

// the app

var app = express();
app.use(express.logger());
app.use(express.bodyParser());

// database

var db, submissions;

// shhhhh

app.get('/', function (req, res) {
	res.send('it\'s a secret to everybody');
});

// hooks

app.post('/:name', function (req, res) {
	submissions.insert({
		endpoint: req.params.name,
		time: new Date(),
		body: JSON.stringify(req.body)
	}, {
		safe: true
	}, function (err, result) {
		res.json({
			"error": err
		});
	});
});

app.get('/:name', function (req, res) {
	submissions.find({
		endpoint: req.params.name
	}).toArray(function (err, items) {
		res.json(items);
	});
});

app.delete('/:name', function (req, res) {
	submissions.find({
		endpoint: req.params.name
	}).toArray(function (err, items) {
		items.forEach(function (item) {
			submissions.remove(item);
		});
		res.json({
			"error": err
		});
	});
});

// serve it

var port = process.env.PORT || 5000;
mongo.connect(process.env.MONGOLAB_URI, {
	auto_reconnect: true
}, function (err, _) {
	db = _;

  // console.log will write to the heroku log which can be accessed via the 
  // command line as "heroku logs"
  db.addListener("error", function (err) {
    console.log("Error connecting to MongoLab:", err);
  });

	db.collection('submissions', function (err, _) {
		submissions = _;

	  app.listen(port, function() {
		  console.log("Listening on " + port);
		});
	});
});
