import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Ticker from './Ticker';
import Upper from './Upper';
import Nav from './Nav';
import Footer from './Footer';
// import Lower from './Lower';
import axios from 'axios';
import Buffer from './Buffer';

 class Landing extends Component {
    constructor(){
        super();
        this.state = {
            people: [],
            breaking: []
        }

    }



    componentWillMount() {
        axios.get('/ticker').then(
           response => this.setState({ people: [response.data.response.results[7].webTitle,response.data.response.results[9].webTitle,response.data.response.results[5].webTitle]})

        
       );
     
       axios.get('/ticker').then(
           response => this.setState({ breaking: [response.data.response.results[0].webTitle +"         ",response.data.response.results[1].webTitle+"          ",response.data.response.results[2].webTitle +"         "]})
       );

    }




    render() {
    return (
        <div>

             <Header type="News" />
              <Ticker breaking={this.state.breaking} />
              <Upper title={this.state.people} />
              <Ticker breaking={this.state.breaking} />

              <Nav />
              <Buffer />
              <Footer />

        </div>

    );
  }
}

export default Landing;
