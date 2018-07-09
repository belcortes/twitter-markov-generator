let pgp = require('pg-promise')();
let connectionString = 'postgres://localhost:5432/tweets';
let db = pgp(connectionString);

// grab all tweets
retrieve = (req, res, next) => {
  db.any('select * from tweet')
    .then((results) => {
      res.status(200)
        .json({
          status: 'success',
          results: results,
          message: 'All tweets retrieved'
        })
    })
    .catch((err) => next(err));
}

// create a tweet
create = (req, res, next) => {
  const content = req.body.content;
  const username = req.body.username;

  db.none('insert into tweet(username, content)' +
          'values(${username}, ${content})', { username, content })
    .then(() => {
      res.status(201)
        .json({
          status: 'success',
          message: 'Tweet successfully created'
        });
    })
    .catch((err) => next(err));
}

module.exports = { create, retrieve };
