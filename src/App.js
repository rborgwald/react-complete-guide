import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Rachel', age: 33},
      {id: 2, name: 'Chase', age: 35, hobby: 'Racing'},
      {id: 3, name: 'Penny', age: 15}
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  };

  deletePersonHandler = (personIdx) => {
    const persons = [...this.state.persons];
    persons.splice(personIdx, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    const persons = this.state.showPersons
      ? (<div>
        {this.state.persons.map((p, idx) =>
          <Person
            key={p.id}
            name={p.name}
            age={p.age}
            click={() => this.deletePersonHandler(idx)}
            changed={(event) => this.nameChangedHandler(event, p.id)}
          />)
        }
      </div>) : null;

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide' : 'Show'} Persons</button>
        {persons}
      </div>
    );
    // Above jsx compiles to code below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
