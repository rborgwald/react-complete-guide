import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import WithClass from '../../../hoc/WithClass';
import wrapperComponent from '../../../hoc/wrapperComponent';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <WithClass>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default wrapperComponent(Person, classes.Person);
