import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // state only useable in properties / class based components
  state = {
    persons: [
      {name: 'Mike', age: 28},
      {name: 'Jan', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Michael';
    this.setState({persons: [
      {name: 'Michael', age: 28},
      {name: 'Janus', age: 26}
    ] 
  })
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Development</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
    // return React.createElement( 'div', null, 'h1', 'Hello for the H1!');
  }
}

export default App;
