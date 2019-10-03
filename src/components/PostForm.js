import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/PostForm.css";
import uuid from "uuid";
class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: uuid.v4(),
      title,
      message,
      editing: false
    };

    console.log(data);

    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };
  componentDidMount() {
    console.log("Mounted");
  }

  render() {
    return (
      <div id="divElement">
        <h1>Create Post</h1>
        <form className="pure-form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Title"
          />
          <br />

          <input
            type="text"
            ref={input => (this.getMessage = input)}
            placeholder="Message"
          />
          <br />
          <br />

          <button className="ui inverted violet button">Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
