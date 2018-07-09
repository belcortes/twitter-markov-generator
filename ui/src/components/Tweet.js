import React from 'react';

const Tweet = (props) => {
  return (
    <li><b>{props.tweet.username}</b><br/>{props.tweet.content}</li>
  )
}

export default Tweet;
