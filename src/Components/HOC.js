import React from 'react';

const HOC = (Propect) => (props) => {
    const color = ["red", "blue", "pink", "green", "yellow"];
    const randomColor = color[Math.floor(Math.random() * color.length)];

    return (
        <div style={{ color: randomColor }}>
            <p style={{ color: randomColor }}>
            <Propect />
            </p>
        </div>
    );
};

export default HOC;