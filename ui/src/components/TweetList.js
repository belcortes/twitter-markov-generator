import React from 'react';

import Tweet from './Tweet'

const TweetList = (props) => {
  return (
    <div>
      <p>Previously generated tweets: </p>
      <ul>
        {props.fakeTweets.map(tweet => {
          return <Tweet key={tweet.id} tweet={tweet} />
        })}
      </ul>
    </div>
  )
}

export default TweetList;
