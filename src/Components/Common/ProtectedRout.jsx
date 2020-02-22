import React from 'react';
import { Route, Redirect } from "react-router-dom";
import {getCurrentUser} from '../../Services/authService';
const ProtectedRout = ({path,Component,render,...rest}) => {
    const user = getCurrentUser();
    return ( 
        <Route
            path={path}
            {...rest} 
            render = {props => {
                if(!user) return <Redirect 
                to={{
                    pathname:"/login",
                    state:{from: props.location}
                }}    
                />;
                return Component? <Component {...props}/>: render(props);
            }}
        />
     );
}
 
export default ProtectedRout;