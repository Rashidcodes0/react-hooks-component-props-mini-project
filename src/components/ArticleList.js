import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const { posts } = props;

    return (
        <div>
            {posts.map((post) => (
                <Article key={post.id} post={post} />
            ))}
        </div>
    );
}

export default ArticleList;

