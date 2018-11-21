import React, { Component } from 'react';

class ModalComponent extends Component {
    render() {
        var { filmDetails } = this.props;
        // => var phoneDetail = this.props.phoneDetails
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <h5 className="modal-title"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> */}
                        <div className="modal-body text-center">
                            <img src={filmDetails.img} />
                            <h2>{filmDetails.title}</h2>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Location</th>
                                        <td>{filmDetails.theatre}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Length</th>
                                        <td>{filmDetails.length} min</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Age Label</th>
                                        <td><img src={filmDetails.ratingLabel}/></td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        {/* <div>

                        </div> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Buy Ticket</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default ModalComponent;