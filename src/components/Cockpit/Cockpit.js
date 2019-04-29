import React from 'react';
import classes from "../../containers/App.module.css";

const cockpit = (props) => {

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (this.state.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>
        {this.state.showPersons ? 'Hide' : 'Show'} Persons
      </button>
    </div>
  );
};

export default cockpit;