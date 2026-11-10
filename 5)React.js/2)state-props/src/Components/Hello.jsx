import React from 'react'
import Greeting from './Greeting';

function Hello() {
    return (
        <div>
            <h2>Hello from a component!</h2>
            <Greeting user={{ name: "Alice", age: 25 }} />
        </div>
    );
}

export default Hello;