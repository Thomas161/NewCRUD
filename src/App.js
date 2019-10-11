import React, { Component } from "react";
import PostForm from "../src/components/PostForm";
import AllPost from "../src/components/AllPost";

// const styles = {
//   backgroundColor: "#ccff00",
//   // margin: "auto",
//   // width: "auto",
//   // height: "400px"
//   backgroundRepeat: "noRepeat"
// };
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
