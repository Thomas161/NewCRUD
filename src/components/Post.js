import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Post extends Component {
  render() {
    const { title, message } = this.props.post;
    const { head } = this.props;
    return (
      <div>
        <div>
          <h1>{head}</h1>
        </div>
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
Post.propTypes = {
  head: PropTypes.string.isRequired
};
Post.defaultProps = {
  head: "All Posts"
};

export default connect()(Post);
