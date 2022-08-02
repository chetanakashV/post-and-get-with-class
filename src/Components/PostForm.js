import axios from 'axios';
import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    useridhandler = (event) => {
        this.setState({userId: event.target.value})
    }
    titlehandler = (event) => {
        this.setState({title: event.target.value})
    }
    bodyhandler = (event) => {
        this.setState({body: event.target.value})
    }

    register = (e) => {
        e.preventDefault() 
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then(response => {console.log(response)})
    }


    render() {
        
        return (
            <form onSubmit={this.register}>
                <label> User Id: </label>
                <input type = "text" placeholder ="enter user Id..." name = "userId" value = {this.state.userId} onChange = {this.useridhandler}/><br/>
                <label> Title: </label>
                <input type = "text" placeholder ="enter title..." name = "Title" value = {this.state.title} onChange = {this.titlehandler}/><br/>
                <label> body: </label>
                <input type = "text" placeholder ="enter body..." name = "body" value = {this.state.body} onChange = {this.bodyhandler}/><br/>
               <button type ="submit" >Register</button>
            </form>
        );
    }
}

export default PostForm;