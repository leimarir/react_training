import React, { Component } from 'react';

class Child extends Component {

    singlData = this.props.data.grocery.map(item => {
        return(
            <li>{item}</li>
        )
    })

    render() {
        return (
            <div>
                <ul>{this.singlData}</ul>
            </div>
        );
    }
}

export default Child;