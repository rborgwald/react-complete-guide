import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Rachel', age: 33},
      {name: 'Chase', age: 35, hobby: 'Racing'},
      {name: 'Penny', age: 26}
    ],
    otherState: 'some other value',
  };

  switchNameHandler = () => {
    this.setState({persons:  [
        {name: 'Rachel', age: 33},
        {name: 'Jonathan', age: 35, hobby: 'Music'},
        {name: 'Penny', age: 26}
      ]});
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby: {this.state.persons[1].hobby}</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // Above jsx compiles to code below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
