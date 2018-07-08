// const initOptions = {schema: };
// const pgp = require('pg-promise')(initOptions);
// const db = pgp(connection);

var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/tweets';
var db = pgp(connectionString);

// add query functions

// module.exports = {
//   getAllTweets: getAllTweets,
//   createTweet: createTweet,
//   removeTweet: removeTweet
// };
