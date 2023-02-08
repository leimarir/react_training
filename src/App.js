import React, { Component } from 'react';
import Modal from './Modal';
import Child from './Child';

class App extends Component {
    state = {
        grocery : ['salt', 'soy sauce', 'oil', 'rice', 'vinegar']
    };

    render() {
        return (
            <div>
                <Modal />
                <div>
                    <Child data = {this.state} />
                </div>
            </div>
        );
    }
}

export default App;