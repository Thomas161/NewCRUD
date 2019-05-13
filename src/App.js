import React, { Component } from "react";
import PostForm from "../src/components/PostForm";
import AllPost from "../src/components/AllPost";
class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "orange",
          width: "100%",
          height: "100%"
        }}
      >
        <PostForm />
        <hr />
        <AllPost />
      </div>
    );
  }
}

export default App;
