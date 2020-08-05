import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return(
        props.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            //changed={this.nameChangedHandler.bind(this, event, person.id)}
            changed={(event) => props.changed( event, person.id )}
            
            // index of each list element passed into method
            click={() => props.clicked( index )}
            // the other way of binding method to component
            //click={(index) => this.deletePersonHandler(index)}
            // note that index is not a good key. index change when your list change. for good id, use unique id assigned(from db perhaps)
            // always create a key in components generated from a list. allows react to check for state changes
            key={person.id}>
            </Person>
        })
    );  
}

export default persons;
