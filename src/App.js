import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Rachel" age="33"/>
        <Person name="Chase" age="35">My hobbies: Racing</Person>
        <Person name="Penny" age="15"/>
      </div>
    );
    // Above jsx compiles to code below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
