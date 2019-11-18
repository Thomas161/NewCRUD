import React from "react";
import App from "../App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as actions from "../actions";

configure({ adapter: new Adapter() });
describe("Suite of tests", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

// describe("actions", () => {
//   it("should create an action to add todo that matches payload", () => {
//     const exepectedAction = {
//       type: "ADD_TODO",
//       payload: "Money"
//     };
//     expect(actions.addTodo()).toEqual(exepectedAction);
//   });
// });
