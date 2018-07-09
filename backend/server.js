let express = require('express');
let bodyParser = require('body-parser');
let Twit = require('twit');
require('dotenv').config();

let db = require('./queries');

const app = express();
var port = process.env.PORT || 4000;
// support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config for authenticating with Twitter
const config = {
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
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
// enpoints for adding and fetching tweets
app.post('/api/tweets', db.create);
app.get('/api/tweets', db.retrieve);
