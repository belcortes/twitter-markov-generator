import React, { Component } from 'react';
import axios from 'axios';

import Search from './components/Search'
import TweetList from './components/TweetList'
import makeTweet from './utils/markov_chain'

class App extends Component {
  state = {
    tweets: [],
    fakeTweets: [],
    username: '',
    fakeTweet: ''
  }

  handleSubmit = (user_handle) => {
    axios.post('/post', {
        user_name: user_handle
      })
      .then(response => {
        this.setState({
          tweets: response.data,
          fakeTweet: makeTweet(3, response.data),
          username: response.data[0].user.name
        })

        this.addTweet();
        this.fetchTweets();

      })
      .catch(error => {
        console.log(error);
      });
  }

  addTweet = () => {
    axios.post('/api/tweets', {
        username: this.state.username,
        content: this.state.fakeTweet
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchTweets = () => {
    axios.get('/api/tweets')
      .then(response => {
        this.setState({fakeTweets: response.data.results})
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchTweets();
  }

  render() {
    return (
      <div className="App">
        <h1>Twitter Generator</h1>
        <p>Enter a twitter handle to generate a fake tweet by the user!</p>
        <Search handleSubmit={this.handleSubmit} />
        {
          this.state.tweets.length === 0 ?
          undefined :
          <div>{this.state.fakeTweet}</div>
        }
        <TweetList fakeTweets={this.state.fakeTweets} />
      </div>
    );
  }
}

export default App;
