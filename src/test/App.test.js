import React from "react";
import App from "../App";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import AllPost from "../components/AllPost";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("Renders Component", () => {
  it("Renders Parent that holds store", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(AllPost).toBeDefined();
    expect(PostForm).toBeDefined();
  });
});
describe("renders child component", () => {
  it("<Allpost/>", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AllPost />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Component has button", () => {
  it("<Post/> has a button", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Post />
      </Provider>
    );

    expect(wrapper.contains("<button></button>")).toBe(false);
  });
});

describe("checking objects in child", () => {
  it("<PostForm/> contains data{}", () => {
    const data = {
      editing: false
    };
    const wrapper = shallow(
      <Provider store={store}>
        <PostForm />
      </Provider>
    );
    expect(wrapper.update());
    expect(data).toHaveProperty("editing");
  });
});
