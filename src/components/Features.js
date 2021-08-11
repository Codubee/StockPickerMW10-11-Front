import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Features() {

    return (
        <div className="text-center">
            <h1>The following are the features of our application: </h1>
            <ListGroup  className="text-center">
                <ListGroupItem tag="a" href="#"> Stock Info </ListGroupItem>
                <ListGroupItem tag="a" href="#"> Potential Matches </ListGroupItem>
                <ListGroupItem tag="a" href="#"> Stocks You've Matched With </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default Features;