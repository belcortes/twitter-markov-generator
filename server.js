let express = require('express');
var router = express.Router();
let Twit = require('twit');

const app = express();

// config for authenticating with Twitter
const config = {
  consumer_key:         'qdCPIfJViCnFCqu4ts3PYF72S',
  consumer_secret:      '0RiuMBiQcYKZSsduDHo2BbO4BxnzyMOWEREcupZUJ9HTFtATDW',
  access_token:         '152867998-AqGzq24yh3ZJUMcucmf2RvrRt7cqSv1aCeC1ArUs',
  access_token_secret:  'W9FNc8m0j2WUiEc4YTGKyvhdw112n9zcd04K4dUYBzKDw',
}

var T = new Twit(config)

// params for twitter endpoint
var params = {
  user_id: 'rustyrockets',
  screen_name: 'rustyrockets'
}

T.get('statuses/user_timeline', params,searchedData);
let dataP

// callback function for twitter endpoint
function searchedData(err, data, response) {
  dataP = data
}
console.log(JSON.stringify(dataP))

// var corsOption = {
//   origin: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   exposedHeaders: ['x-auth-token']
// };
// app.use(cors(corsOption));

app.get('/data', (req, res) => res.send(dataP));

app.listen(4000, () => console.log('markov app running'));
