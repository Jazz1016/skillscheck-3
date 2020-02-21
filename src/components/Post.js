import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: "",
      author: "",
      authorPicture: ""
    };
  }

  getPost = id => {
    //gets single post based on id passed in
  };

  render() {
    return <div>Post.js</div>;
  }
}
