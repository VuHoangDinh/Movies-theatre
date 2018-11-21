import React, { Component } from 'react';

class filmItem extends Component {

    getFilmDetails = () => {
        this.props.getFilmDetails(this.props.film);
    }
    render() {
        var detail = this.props.film
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={detail.img} alt="Card" style={{ maxWidth: '100%', height: 500 }} />
                        <div className="card-body text-center">
                            
                            
                            {/* <span>{detail.rating}</span> */}
                            {/* <p className="card-text">{this.state.status ?  phoneItemDetail.desc: ''}</p>
                            <button className="btn btn-primary" onClick ={ this.toggleDescription }>Detail</button> */}
                            <button onClick={this.getFilmDetails} className="btn btn-info mx-1" data-toggle="modal" data-target="#myModal">More info</button>
                            {/* <button className="btn btn-danger" onClick = {this.addToCartItem}>Cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default filmItem;