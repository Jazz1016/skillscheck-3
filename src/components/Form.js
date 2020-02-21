import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }

  handleInputs = () => {};

  submitNewPost = () => {};

  render() {
    return <div>Form.js</div>;
  }
}

export default Form;
