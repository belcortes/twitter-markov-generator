DROP DATABASE IF EXISTS tweets;
CREATE DATABASE tweets;

\c tweets;

CREATE TABLE tweet (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  content VARCHAR
);

INSERT INTO tweet (username, content)
  VALUES ('Tyler', 'hello there my name is tyler @here');
