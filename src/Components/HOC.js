import React from 'react';

const HOC = (WrappedComponent) => (props) => {
    const color = ["red", "blue", "pink", "green", "yellow"];
    const randomColor = color[Math.floor(Math.random() * color.length)];

    return (
        <WrappedComponent color={randomColor} {...props} />
    );
};

export default HOC;