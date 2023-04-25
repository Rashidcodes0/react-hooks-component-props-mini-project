import React from "react";

function About(props) {
    const { image = "https://via.placeholder.com/215", text } = props;

    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{text}</p>
        </aside>
    );
}

export default About;
