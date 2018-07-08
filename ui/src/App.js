import React, { Component } from 'react';
import axios from 'axios';

import Search from './components/Search'
import TweetList from './components/TweetList'

class App extends Component {
  state = {
    tweets: []
  }

  handleSubmit = (user_handle) => {
    console.log(user_handle)
    axios.post('/post', {
        user_name: user_handle
      })
      .then(response => {
        console.log(response)
        this.setState({tweets: response.data})
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit} />
        {
          this.state.tweets.length === 0 ?
          undefined :
          <TweetList tweets={this.state.tweets} />
        }
        {console.log(this.state.tweets)}
      </div>
    );
  }
}

export default App;
