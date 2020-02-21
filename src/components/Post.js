import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: { title: "", img: "", content: "", author: "", authorPicture: "" }
    };
  }

  componentDidMount = () => {
    // console.log(this.props.match.params.id);
    this.getPost(this.props.match.params.id);
  };

  getPost = id => {
    console.log(id);
    axios
      .get(`/api/post/${id}`)
      .then(res => {
        console.log(res);
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
    //gets single post based on id passed in
  };

  render() {
    console.log(this.props);
    console.log(this.state.post);

    return (
      <div>
        Post.js
        <h4>{this.state.post.title}</h4>
        <img src={`${this.state.post.img}`} />
        <p>{this.state.post.content}</p>
      </div>
    );
  }
}

export default Post;
