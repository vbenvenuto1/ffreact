import React, { Component } from 'react';
import Lower from "./Lower";
import axios from 'axios'; 


class Articles {
    constructor(title, img, src){
        this.title = title; 
        this.img = img; 
        this.src = src; 
    }
    setTitle(x){
        this.title = x; 
    }
    setImg(x){
        this.img = x; 
    }
    setSrc(x){
        this.src = x; 
    }
    getTitle(){
        return this.title; 
    } 
    getgetImg(){
        return this.img; 
    } 
    getSrc(){
        return this.src; 
    } 

}







class Maker extends Component {
    constructor(){
        super(); 
        this.state = {
            trending: [], 
            guardianLink: [], 
            fox: []
        }
    }


    componentWillMount() {
        
       if (this.props.kind ==="rand"){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=dc261e9c22c44051b1df8f76db826c17').then(
           response => this.setState({ trending: [response.data.title]} )
       );
       console.log(this.state.trending[0],"kfafkmfkklll");
    }
        else{
            axios.get(`https://content.guardianapis.com/search?q=${this.props.type}&api-key=c78d3ee2-a1b2-43f4-9d66-ac228f6b6a0d`).then(
                response => this.setState({ guardian: [response.data.response.results[0].webTitle,response.data.response.results[1].webTitle,response.data.response.results[2].webTitle]
                 ,  guardianLink: [response.data.response.results[0].webUrl,response.data.response.results[1].webUrl,response.data.response.results[2].webUrl]} )
            );
            // $this.props.match.params.catId}
            console.log(this.state.trending[0],"kfafkmfkklll");
        }
       
    }


//should return title, desc, and link url ....also img source later.

// this.props.kind = rand
    render() {
        let Whole = new Articles(); 

        Whole.setTitle('BREAKING TITLE');
        console.log(this.state.trending);
    return (
      <div>
          <Lower />
          <Lower />
          <Lower />
          <Lower />
          <Lower />
          <Lower />
          <Lower />
          <Lower />
          <Lower />
          <Lower />
          {/* <Lower title={this.state.guardian[0]} link={this.state.guardianLink[0]} />
          <Lower title={this.state.guardian[1]} link={this.state.guardianLink[1]} />
          <Lower title={this.state.guardian[2]} link={this.state.guardianLink[2]} />

     */}
          
      </div>
    );
  }
}

export default Maker;