var express = require('express'),
    app     = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {
    signalUI: require('signal-ui')
  });
});

app.listen(3000, function() {
  console.log('Node server running at http://localhost:3000');
});
