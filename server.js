let express = require('express');
var bodyParser = require('body-parser');
let Twit = require('twit');

const app = express();
var port = process.env.PORT || 4000;
// support json encoded bodies
app.use(bodyParser.json());

// config for authenticating with Twitter
const config = {
  consumer_key:         'qdCPIfJViCnFCqu4ts3PYF72S',
  consumer_secret:      '0RiuMBiQcYKZSsduDHo2BbO4BxnzyMOWEREcupZUJ9HTFtATDW',
  access_token:         '152867998-AqGzq24yh3ZJUMcucmf2RvrRt7cqSv1aCeC1ArUs',
  access_token_secret:  'W9FNc8m0j2WUiEc4YTGKyvhdw112n9zcd04K4dUYBzKDw',
}

var T = new Twit(config)

// params for twitter endpoint
let username;
let dataP;
app.post('/post', function(req, res) {
    username = req.body.user_name;
    console.log('GOT A REQUEST');
    console.log(username);
    res.json({status : 'success'});
})

// middleware for express - updating the username whenever user inputs new twitter handle
var dataOutput = function (req, res, next) {
  T.get('statuses/user_timeline', {screen_name: username}, (err, data, res) => {
    console.log(res)
    console.log(data)
    dataP = data
  });
  console.log(dataP)
  req.dataOutput = dataP
  next()
}

app.use(dataOutput)

app.listen(port, () => console.log('markov app running'));
app.get('/data', (req, res) => {
  res.send(req.dataOutput)
});
