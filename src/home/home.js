import React, { Component } from 'react';

import Carousel from './carousel/carousel';
import Film from './film/film';
import ModalComponent from './modal/modal';
import FilterByTheater from './filterByTheater/filterByTheater';

class home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <FilterByTheater filmDetails={this.props.filmDetails} getFilter = {this.props.getFilter} theatreList={this.props.theatreList} />
                <Film getFilmDetails={this.props.getFilmDetails} getTheatreList={this.props.getTheatreList} />
                <ModalComponent filmDetails={this.props.filmDetails} />
            </div>
        );
    }
}

export default home;


// for (value in valueArr) {
//     switch (value) {
//         case value:
//             return
//             break;
//         default abc
//     }
// }