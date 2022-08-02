import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts  : [],
            errorMsg: ''
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {console.log(response) 
        this.setState( {posts :response.data})}).catch(error => {this.setState({errorMsg: 'error retreiving data'})})
    }
    render() {
        return (
            <div>
               List of posts 
               {
                this.state.posts.map(post => <div key = {post.id}>{post.title}</div>)
               }
              { this.state.errorMsg? <div >{this.state.errorMsg}</div> : null}
            </div>
        );
    }
}

export default PostList;