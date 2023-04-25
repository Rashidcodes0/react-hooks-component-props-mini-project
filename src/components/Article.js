import React from "react";

function Article(props) {
    const { title, date, preview } = props;

    return (
        <article>
            <h3>{title}npm audit: Broken by Design</h3>
            <small>{date ? date : "January 1, 1970"}</small>
            <p>{preview}Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</p>
        </article>
    );
}

export default Article;
