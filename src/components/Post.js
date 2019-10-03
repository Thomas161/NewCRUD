import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    const { title, message } = this.props.post;
    return (
      <div>
        <div className="ui card">
          <div className="content">
            <h3>{title}</h3>
            <h4>{message}</h4>

            <button
              onClick={() =>
                this.props.dispatch({
                  type: "EDIT_POST",
                  id: this.props.post.id
                })
              }
              className="circular ui icon button green"
            >
              <i className="icon edit"></i>
              Edit
            </button>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_POST",
                  id: this.props.post.id
                })
              }
              className="circular ui icon button red"
            >
              <i className="icon trash"></i>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Post);
