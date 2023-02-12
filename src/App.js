import React, { Component } from 'react';
import RouterApp from './RouteApp';
import HOC from './Components/HOC';

class App extends Component {

    render() {
        return (
            <div>
                <RouterApp />
            </div>
        );
    }
}

export default HOC(App);