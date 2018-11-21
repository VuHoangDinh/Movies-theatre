import React, { Component } from 'react';

import FilmItem from './filmItem/filmItem';

class film extends Component {

    constructor(props) {
        super(props);
        this.state = {

            data: [],
            isLoading: true

        };
    }


    filmArr = [];




    componentWillMount() {
        let url = "http://www.finnkino.fi/xml/Schedule/";
        fetch(url)
            .then(response => response.text())
            .then(data => {
                let parser = new DOMParser();
                data = parser.parseFromString(data, "text/xml");
                // console.log(data);
                var showData = data.getElementsByTagName("Show");

                /** Áp dụng cho showData[i] có showData[i].childNodes[75].nodeName === "Images"
                 *  showData[0].childNodes[55] là theater
                 *  showData[0].childNodes[31] là title,
                 *  showData[0].childNodes[75].childNodes[5] là medium image portrait
                 *  tìm những thông tin khác bằng cách tương tự...
                 * 
                 * ****Lưu ý : có những showData[i] có thêm 1 nodeChild đó là 
                 * showData[i].childNodes[75].nodeName === "SubtitleLanguage2" chứ không phải "Images"
                 * 
                 */


                for (let i = 0; i < showData.length; i++) {

                    // console.log(showData[i].getElementsByTagName("Images")[0].childNodes[3].innerHTML); -> src của image
                    let img = showData[i].getElementsByTagName("Images")[0].childNodes[3].innerHTML;
                    let theatre = showData[i].getElementsByTagName("Theatre")[0].innerHTML;
                    let title = showData[i].getElementsByTagName("Title")[0].innerHTML;
                    let length = showData[i].getElementsByTagName("LengthInMinutes")[0].innerHTML;
                    let ratingLabel = showData[i].getElementsByTagName("RatingImageUrl")[0].innerHTML;

                    this.filmArr = [...this.filmArr, { img, theatre, title, length, ratingLabel }]

                }
                // console.log(this.filmArr);


                this.setState({
                    isLoading: false,
                    data: this.filmArr
                })

            });

         this.passTheatres() 

        // console.log(this.state.data);

        // console.log("hi");

    }

    renderFilmItem = () => {

        // console.log("a");
        // console.log(this.state.data);
        var filmItemArr = this.state.data.map((film, index) => {
            // console.log(this.filmArr);
            return <FilmItem
                film={film}
                key={index}
                getFilmDetails={this.props.getFilmDetails}
            />
        })
        // {this.passTheatres()}
        console.log('1')
        return filmItemArr;


    }

    passTheatres = () => {
        let { data } = this.state;
        let theatreList = [];
        // console.log(data);
        // console.log(data[1].theatre);
        // theatreList = {...this.state.data.theatre};
        // this.props.getTheatreList(theatreList);
        for (let i in data) {
            let theatre = data[i].theatre;
            theatreList = [...theatreList, theatre];

        }
        // console.log(theatreList);
        this.props.getTheatreList(theatreList);
    }


    render() {

        if (this.state.isLoading) {
            console.log("render waiting");
            return <h1>Loading...</h1>
        }
        else {
            // console.log(this.state.isLoading)
            // console.log(this.state.data + 'alo')
            return (
                <section id="film" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        {this.renderFilmItem()}
                        {/* {this.passTheatres()} */}
                    </div>
                </section>
            );
        }
    }
}

export default film;