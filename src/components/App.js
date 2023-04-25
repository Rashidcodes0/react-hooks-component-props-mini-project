import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About
        image="https://example.com/my-image.jpg"
        text="This is some text about my blog."
      />
      <main>
        <ArticleList posts={blogData.posts} />
      </main>
      {/* other components */}
    </div>
  );
}

export default App;

