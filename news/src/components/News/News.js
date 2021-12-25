import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }


    // `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=09ef819989214e788bd5c136781c8b90

    componentDidMount() {
    
        const url = `/lower/card/${this.props.cat}`;

        fetch(url)
         .then((response) => {
             return response.json();
         })
         .then((data) => {
             this.setState({
                 news: data.articles
             })
         })
         .catch((error) => console.log(error));
    }
    renderItems () {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }
    render (){
     return (
         <div className="row">
             {this.renderItems()}
        </div>
     );
    }
}

export default News;
