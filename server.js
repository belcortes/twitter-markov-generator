let express = require('express');
var bodyParser = require('body-parser');
let Twit = require('twit');
var request = require('request');

var db = require('./queries');

const app = express();
var port = process.env.PORT || 4000;
// support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config for authenticating with Twitter
const config = {
  consumer_key:         'qdCPIfJViCnFCqu4ts3PYF72S',
  consumer_secret:      '0RiuMBiQcYKZSsduDHo2BbO4BxnzyMOWEREcupZUJ9HTFtATDW',
  access_token:         '152867998-AqGzq24yh3ZJUMcucmf2RvrRt7cqSv1aCeC1ArUs',
  access_token_secret:  'W9FNc8m0j2WUiEc4YTGKyvhdw112n9zcd04K4dUYBzKDw',
}

var T = new Twit(config)

app.post('/post', (req, res) => {
  //grabbing username from react user input OR just displaying my own
  const username = req.body.user_name || 'bebelcortes';

  T.get('statuses/user_timeline', {screen_name: username, count:50}, (err, data, response) => {
    if (!err) {
      res.send(data)
    }
    else {
      res.status(500).send('error')
    }

  });
})


app.listen(port, () => console.log('markov app running'));
