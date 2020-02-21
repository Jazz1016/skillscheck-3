import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../redux/Reducer";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: "",
      userposts: true
    };
  }

  componentDidMount() {
    this.getUserPosts(this.props.state.user.user_id);
  }

  clearSearch = () => {
    this.setState({ search: "" });
  };

  getUserPosts = userid => {
    axios.get(`/api/posts/${userid}`).then(res => {
      this.setState({ posts: res.data });
    });
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    console.log(this.props);
    const postList = this.state.posts.map((post, i) => {
      return (
        <Link to={`post/${post.post_id}`}>
          <div>{post.title}</div>
        </Link>
      );
    });
    return (
      <div>
        Dashboard.js
        <input
          onChange={e => {
            this.handleChange(e);
          }}
        />
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(Dashboard);
