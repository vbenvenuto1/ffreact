import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';
// import { Timeline } from 'react-twitter-widgets';


class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        };
    }

    // this.props.news.type
    // {this.props.news.query}
    componentDidMount() {
        let url = `/upper/${this.props.news.type}/sources=${this.props.news.query}`;

        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews: response.data.articles
            })
        })
        .catch((error) => console.log(error));
    }
    renderItems () {
        return this.state.sidenews.map((item) => (
            <SingleSide key={item.url} item={item} />
        ));
    }
    render (){
     return (
        //  <div className="row">
        //      {this.renderItems()}
        // </div>
        <div class="row">
            <div class="col s12 m12">
              <div class="card-panel white">
                <span class="black-text">
                  {this.renderItems()}
                </span>
              </div>
            </div>
          </div>
     );
    }
}



export default Sidenews;
