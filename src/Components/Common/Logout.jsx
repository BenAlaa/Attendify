import { Component } from 'react';
import {logout} from '../../Services/authService';

class Logout extends Component {

    componentDidMount(){
        logout();
        window.location.assign('/');
        // this.props.history.push('/');
    }
    render() { 
        return null;
    }
}
 
export default Logout;