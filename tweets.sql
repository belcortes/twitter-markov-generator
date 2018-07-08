DROP DATABASE IF EXISTS tweets;
CREATE DATABASE tweets;

\c tweets;

CREATE TABLE tweet (
  ID SERIAL PRIMARY KEY,
  user VARCHAR,
  tweet VARCHAR
);

INSERT INTO tweet (user, tweet)
  VALUES ('Tyler', 'hello there my name is tyler @here');
