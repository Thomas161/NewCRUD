import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";
import "../css/AllPost.css";
import PropTypes from "prop-types";
class AllPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="h1">
        <h1>{this.props.head}</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.editing ? (
              <EditComponent post={post} key={post.id} />
            ) : (
              <Post key={post.id} post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};

AllPost.propTypes = {
  head: PropTypes.string.isRequired
};
AllPost.defaultProps = {
  head: "All Posts"
};

export default connect(mapStateToProps)(AllPost);
