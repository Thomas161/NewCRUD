import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <h4>{this.props.post.message}</h4>

        <button
          className="btn btn-danger"
          onClick={() =>
            this.props.dispatch({
              type: "EDIT_POST",
              id: this.props.post.id
            })
          }
        >
          Edit
        </button>
        <button
          className="btn btn-primary"
          onClick={() =>
            this.props.dispatch({ type: "DELETE_POST", id: this.props.post.id })
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(Post);
