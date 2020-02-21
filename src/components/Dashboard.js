import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../redux/Reducer";
import { Link } from "react-router-dom";
import "./Dash-Post.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: "",
      userposts: false
    };
  }

  componentDidMount() {
    this.getAllPosts();
  }
  getAllPosts = () => {
    axios.get(`/api/posts`).then(res => {
      this.setState({ posts: res.data });
    });
  };

  getUserPosts = userid => {
    axios.get(`/api/posts/${userid}`).then(res => {
      this.setState({ posts: res.data });
    });
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };
  clearSearch = () => {
    this.setState({ search: "" });
  };
  searchPosts = text => {
    console.log(text);
    axios.get(`/api/post?title=${text}`).then(res => {
      this.setState({ posts: res.data });
    });
  };
  render() {
    // console.log(this.props);
    // console.log(this.state.posts);
    const postList = this.state.posts.map((post, i) => {
      return (
        <Link to={`post/${post.post_id}`}>
          <div>
            <section>{post.title}</section>
            <img
              className="img"
              src={`https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg`}
            />
          </div>
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
        <button
          onClick={() => {
            this.searchPosts(this.state.search);
          }}
        >
          search
        </button>
        <input type="checkbox" name="" value="check"></input>
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
