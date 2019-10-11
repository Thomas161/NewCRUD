import React, { Component } from "react";
import PostForm from "../src/components/PostForm";
import AllPost from "../src/components/AllPost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <br />
        <AllPost />
      </div>
    );
  }
}

export default App;
