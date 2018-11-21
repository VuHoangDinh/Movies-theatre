import React, { Component } from 'react';

class filterByTheater extends Component {


    theatreArr = [];

    filterByTheater = (value) =>{
        this.props.getFilter(value);
    }

    getTheater = () =>{
        let {theatreList} = this.props
        console.log(theatreList);
        // let theatreArr = this.props.theatreList.map((index) =>{
        //     return <a className="dropdown-item" href="" key={index}>{this.props.theatreList}</a>
        // })
        // return theatreArr;
    }

    render() {

        return (

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Choose theatre
  </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {this.getTheater()}
                </div>
            </div>

        );
    }
}

export default filterByTheater;