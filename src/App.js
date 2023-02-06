import React, {Component} from 'react';

class App extends Component {
  //Task 2: Using array and map function
  fruits = ["apple", "banana", "mango", "coconut", "orange"];
  listFruits = this.fruits.map((fruits) =>
    <li>{fruits}</li>
  );

  state = {
    text : 'Hello there!'
  }

  //Task 3: Using button to change state
  handleClick = () =>{
    this.setState(
      {
        text : 'Goodbye'
      }
    )
  }

  render(){
    return(
      <div>
        <ul>{this.listFruits}</ul>
        <h2>Message</h2>
          <p>{this.state.text}</p>
        <button onClick={this.handleClick}>
          Change State
        </button>
      </div>
    );
  }

}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
