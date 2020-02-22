import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import ProtectedRout from './Components/Common/ProtectedRout';
import Attendence from './Components/Attendence/Attendence';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Logout from './Components/Common/Logout';
import NavBar from './Components/NavBar/NavBar';
import {getCurrentUser} from './Services/authService';


function App() {
  const user = getCurrentUser();

  return (
    <React.Fragment>
      <NavBar user={user}/>
      <Switch>
        <ProtectedRout path="/attendence" render={(props) => <Attendence {...props}/>}/>
        <Route path="/login"  render={(props) => <Login {...props} history={props.history}/>}/>
        <Route path="/logout" component={Logout} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/attendence" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
