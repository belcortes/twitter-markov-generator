import React from 'react';

import makeTweet from '../utils/markov_chain'
import Tweet from './Tweet'

const TweetList = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>

      <div>{makeTweet(3, props.tweets)}</div>
    </div>
  )
}

export default TweetList;

// <ul style={{display: 'flex', flexDirection: 'column'}}>
//   {
//     props.tweets.map(tweet => {
//       return <Tweet key={tweet.id} tweet={tweet} />
//     })
//   }
// </ul>
