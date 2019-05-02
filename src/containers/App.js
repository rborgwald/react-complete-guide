import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 1, name: 'Rachel', age: 33},
      {id: 2, name: 'Chase', age: 35, hobby: 'Racing'},
      {id: 3, name: 'Penny', age: 15}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler}/>;
    }

    return (
      <div className={classes.App}>
        <button onClick={() => { this.setState({showCockpit: false});}}>Remove Cockpit</button>
        {this.state.showCockpit && <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}/>}
        {persons}
      </div>
    );
  }
}

export default App;
