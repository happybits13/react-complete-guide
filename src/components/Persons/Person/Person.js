// to use jsx, need to import React
import React, {useContext} from 'react'
import './Person.css';

//import Radium from 'radium'

// Another css library
//import styled from 'styled-components'

import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context';

const Person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }

    const authContext = useContext(AuthContext);
    let buttonMsg = null;
    //console.log(authContext.authenticated)

    if (authContext.authenticated) 
        {buttonMsg='Authenticated';}
    else
        {buttonMsg='Please Log in';}


    return(

    <React.Fragment>
        <div className="Person">
            {/* <AuthContext.Consumer>
                {context => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
            </AuthContext.Consumer> */}
            <p>{buttonMsg}</p>
            <p onClick={props.click}>
                Name: {props.name}, Age: {props.age}
            </p>
            <p>{props.children}</p>
            <input 
                type="text" 
                onChange={props.changed} 
                values={props.name}>
            </input>
        </div>
    </React.Fragment>

    );
}




// Prop Types: prop validation. Useful for debugging/libraries makings
// this can help to validate the prop that is passed into person



Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    click: PropTypes.func
}

export default Person;