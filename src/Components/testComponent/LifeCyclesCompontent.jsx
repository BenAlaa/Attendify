
import React, { Component } from 'react';

class Lifecycles extends Component {
    constructor(){
        super();
        console.log('c');
    }
    componentDidMount() {
        console.log('a');
    }
    componentDidUpdate() {
        console.log('b'); 
    }

    render() {
        console.log('d');
        return (
            <div>
                Lifecycle Component
            </div>
        )
    }

}
export default Lifecycles;

