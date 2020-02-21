import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }

  handleInputs = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearInputs = () => {
    this.setState({ title: "", img: "", content: "" });
  };

  submitNewPost = (id, title, img, content) => {
    axios
      .post(`/api/posts/${id}`, { title, img, content })
      .then(() => {})
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <header>New Post</header>
        <h5>Title:</h5>
        <input
          name="title"
          onChange={event => {
            this.handleInputs(event);
          }}
        />
        <h5>Image URL:</h5>
        <input
          name="img"
          onChange={event => {
            this.handleInputs(event);
          }}
        />
        <h5>Content:</h5>
        <input
          name="content"
          onChange={event => {
            this.handleInputs(event);
          }}
        />
        <Link to="/dash">
          <button
            onClick={() => {
              this.submitNewPost(
                this.props.user.user_id,
                this.state.title,
                this.state.img,
                this.state.content
              );
              this.clearInputs();
            }}
          >
            Post
          </button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Form);
