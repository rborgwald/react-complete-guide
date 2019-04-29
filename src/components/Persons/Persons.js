import React from 'react';
import Person from './Person/Person';

const persons = (props) =>
  props.persons.map((p, idx) =>
    <Person
      key={p.id}
      name={p.name}
      age={p.age}
      click={() => props.clicked(idx)}
      changed={(event) => props.changed(event, p.id)}
    />);

export default persons;

