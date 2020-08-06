import React, { useEffect, useRef, useContext} from 'react';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    // reference hook. reference and manipulate element after
    // useful if for eg wrong field, then highlight field??
    // smth like document.getElement('.toggleBtn');
    const toggleBtnRef = useRef(null)
    const authContext = useContext(AuthContext);


    // this happens after every render
    useEffect(() => {
        console.log('happen all time eventHook');
        console.log('authenticated: ' + authContext.authenticated);
        // this only occurs on 2nd effectHook onwards
        return () => {
            console.log('Before useEffect Hook (2nd useEffect onwards)');
        }
    });

    // this happens after first render. 
    useEffect(() => {
        console.log('1 time useEffect hook');
        toggleBtnRef.current.click();
    },[]);

    // this happens after first render. and whenever props change subsequently
    useEffect(() => {
        console.log('props useEffect hook');
    },[props.title])

    return(
    <React.Fragment>
        <h1> {props.title} </h1>
        <p className={props.classes}>Easy</p>
        <button ref={toggleBtnRef} style={props.buttonStyle} onClick={props.clicked}>Toggle persons</button>
        <button onClick={authContext.login}>Log in</button>

    </React.Fragment>
    );
}


// this checks if there is any updates on imported components (person)
// only export again if there is updates
export default React.memo(Cockpit);
