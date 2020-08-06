import React from 'react';

// javacscript object that can be made available in other files      
// can initialise anything within. object, string, numbers
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;