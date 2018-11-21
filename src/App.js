import React, { Component } from 'react';

import './App.css';

import Home from './home/home';
import ModalComponent from './home/modal/modal';

class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      theatreList: [],
      quantity: 0,
      filterValue: '',
      filmDetails: {}
    }
  }

  getFilter = (value) => {
    this.setState({
      filterValue: value
    })
  }

  getFilmDetails = (film) => {
    this.setState({
      filmDetails: film
    })
  }

  getTheatreList = (data) =>{
    this.setState({
      theatreList: data
    })
  }


  render() {
    return (
      <div>
        <Home getFilmDetails={this.getFilmDetails} filmDetails={this.state.filmDetails} getFilter={this.getFilter} theatreList={this.state.theatreList} getTheatreList = {this.getTheatreList} />
        {/* <ModalComponent filmDetails = {this.props.filmDetails}/> */}
      </div>
    );
  }
}

export default App;
