import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        posts: [], 
    }
  }

  componentDidMount () {
    fetch('http://127.0.0.1:8000/api/posts/')
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
  }

  All_Posts = () => {
    fetch('http://127.0.0.1:8000/api/posts/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  Boasts = () => {
    fetch('http://127.0.0.1:8000/api/posts/boast/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  Roasts = () => {
    fetch('http://127.0.0.1:8000/api/posts/roast/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }

  Up_vote = (id) => {
    let res ={method: "GET"}
    fetch(`http://127.0.0.1/api/post/${id}/up_vote/`, res)
    this.Posts()
  }

  Down_vote = (id) => {
    let res ={method: "GET"}
    fetch(`http://localhost:8000/api/posts/${id}/down_vote/`, res)
    this.Posts()
  }

  Sum_of_all_votes = () => {
    fetch('http://127.0.0.1:8000/api/posts/sum_of_all_votes/')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }


    render() {
      return (
        <div>
          <h1>GhostPost Frontend</h1>
          <ul>
            {this.state.posts.map((p) => {
              return (
                <p>
                  <li>Post: {p.post_input}</li>
                  <li>Date: {p.date}</li>
                  <li>Up Votes: {p.up_vote}</li>
                  <li>Down Votes: {p.down_vote}</li>
                  <li>Sum of All Votes:  {p.sum_of_votes}</li>
                </p>
                )
              })} 
            </ul>
          <p>
            <button onClick={this.All_Posts}>See all the posts</button>
            <button onClick={this.Boasts}>See all the boasts</button>
            <button onClick={this.Roasts}>See all the roasts</button>
            <button onClick={this.Sum_of_all_votes}>See the votes by Highest Total</button>
            <button onClick={this.All_Posts}>HOMEPAGE</button>
          </p>
          
        </div>
  );
}
}

export default App;
