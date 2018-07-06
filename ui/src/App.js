import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import TwitterLogin from 'react-twitter-auth';

class App extends Component {
  // state = {
  //   isAuthenticated: false,
  //   user: null,
  //   token: ''
  // }
  //
  // onSuccess = (response) => {
  //   const token = response.headers.get('x-auth-token');
  //   response.json().then(user => {
  //     if (token) {
  //       this.setState({isAuthenticated: true, user: user, token: token});
  //     }
  //   });
  // };
  //
  // logout = () => {
  //   this.setState({isAuthenticated: false, token: '', user: null})
  // };
  //
  // onFailed = (error) => {
  //   alert(error);
  // };

  componentDidMount() {
    console.log('mounting!')
    axios.get('/data')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
          console.log('Error retrieving')
          console.log(error)
      })
  }

  render() {
    // let content = !!this.state.isAuthenticated ?
    // (
    //   <div>
    //     <p>Authenticated</p>
    //     <div>
    //       {this.state.user.email}
    //     </div>
    //     <div>
    //       <button onClick={this.logout} className="button" >
    //         Log out
    //       </button>
    //     </div>
    //   </div>
    // ) :
    // (
    //   <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
    //                 onFailure={this.onFailed} onSuccess={this.onSuccess}
    //                 requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"/>
    // );

    return (
      <div className="App">
        'hello'
      </div>
    );
  }
}

export default App;
