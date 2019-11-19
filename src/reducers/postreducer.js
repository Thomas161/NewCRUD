// import _ from "lodash";
import { ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST } from "../actions";

const initState = [];
export const postReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_POST:
      return state.concat([action.data]);
    case DELETE_POST:
      const newState = state.filter(post => post.id !== action.id);
      // const newState = _.mapKeys(state, action.id);
      // console.log(newState);
      // //return _.omit(state.filter(post => post.id !== action.id));
      // return _.omit(state,'newState');

      return newState;
    case EDIT_POST:
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case UPDATE_POST:
      return state.map(post => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing
          };
        } else return post;
      });
    default:
      return state;
  }
};
