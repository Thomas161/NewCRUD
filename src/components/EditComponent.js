import React, { Component } from "react";
import { connect } from "react-redux";
import { UPDATE_POST } from "../actions";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({
      type: UPDATE_POST,
      id: this.props.post.id,
      data: data
    });
  };

  componentDidMount() {
    console.log("Mounts");
  }

  componentWillUnmount() {
    console.log("Unmounts");
  }

  render() {
    const { title, message } = this.props.post;
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={title}
            placeholder="Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            defaultValue={message}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button className="ui inverted violet button">Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
