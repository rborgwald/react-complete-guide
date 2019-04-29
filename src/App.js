import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((p, idx) =>
          <ErrorBoundary key={p.id}><Person
            name={p.name}
            age={p.age}
            click={() => this.deletePersonHandler(idx)}
            changed={(event) => this.nameChangedHandler(event, p.id)}
          /></ErrorBoundary>)
        }
      </div>);
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide' : 'Show'} Persons</button>
        {persons}
      </div>
    );
    // Above jsx compiles to code below
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;
