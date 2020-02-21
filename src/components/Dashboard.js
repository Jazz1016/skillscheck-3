import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: "",
      userposts: true
    };
  }

  getPosts = () => {
    //gets all posts from database and resets search
  };

  render() {
    return <div>Dashboard.js</div>;
  }
}
