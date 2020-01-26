import React from 'react';
import './Person.css';


const person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <p> I'm {props.name} and I'm {props.age} years old</p>
            <input type="Text" value={props.name} />
        </div>

    )
};

export default person