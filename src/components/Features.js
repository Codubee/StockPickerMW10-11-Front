import React from 'react';
import { ListGroup } from 'reactstrap';

function Features() {

    return (
        <div className="text-center">
            <h1>The following are the features of our application: </h1>
            <ListGroup  className="text-center">
                <p> Stock Info </p>
                <p> Potential Matches </p>
                <p tag="a" href="#"> Stocks You've Matched With </p>
            </ListGroup>
        </div>
    );
}

export default Features;