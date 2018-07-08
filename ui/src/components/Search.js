import React, { Component } from 'react';

class Search extends Component {
  state = {
		submitted: false,
		searchInput: ''
	}

	saveNewInput = (e) => {
		const searchInput = e.target.value;
		this.setState({ searchInput })
	}

	handleSubmit = (e) => {
		e.preventDefault();
    this.setState({'submitted': true });
    this.props.handleSubmit(this.state.searchInput)
	}

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="search" type="text" placeholder="Search" onChange={this.saveNewInput}/>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

export default Search;
