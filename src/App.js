import React, { Component } from 'react';
import Display from './Components/Display';
import ButtonAppBar from './Components/ButtonAppBar';
import FormUser from './Components/FormUser';
import BasicCard from './Components/BasicCard';

class App extends Component {
    state = {
        userData: [],
    };

    formUser = (props) => {
        console.log(props);
        console.log(this.state.userData)
        let userData = [...this.state.userData, props];

        this.setState({
            userData,
        });
    };

    render() {
        return (
            <div>
                <ButtonAppBar />
                <FormUser formUser={this.formUser} />
                <Display userData={this.state.userData} />
            </div>
        );
    }
}

export default App;