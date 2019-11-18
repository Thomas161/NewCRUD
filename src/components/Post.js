import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { EDIT_POST, DELETE_POST } from "../actions";
import { CSSTransition } from "react-transition-group";
import s from "../css/Post.module.css";
import "../css/style.css";

class Post extends Component {
  render() {
    const {
      post: { title, message }
    } = this.props;
    const { head } = this.props;
    return (
      <div className={s.pos}>
        <div>
          <h1 className={s.h1}>{head}</h1>
        </div>
        <CSSTransition classNames="list" timeout={1500}>
          <div className="ui card">
            <div className="content">
              <h3 className={s.h3}>{title}</h3>
              <h4 className={s.h4}>{message}</h4>

              <button
                onClick={() =>
                  this.props.dispatch({
                    type: EDIT_POST,
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
                    type: DELETE_POST,
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
        </CSSTransition>
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
