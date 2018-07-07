import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  sendData = () => {
    axios.post('/post', {
        user_name: 'Cmdr_Hadfield'
      })
      .then(response => {
        this.retrieveUser();
      })
      .catch(error => {
        console.log(error);
      });
  }

  retrieveUser = () => {
    axios.get('/data')
      .then((response) => {
        console.log('yello')
        console.log(response.data)
      })
      .catch((error) => {
          console.log('Error retrieving')
          console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        hello
        <button onClick={() => this.sendData()}>click me</button>
      </div>
    );
  }
}

export default App;
