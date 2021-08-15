import React, {useState} from 'react';
import { Collapse, Button } from 'reactstrap'; //Add whatever elements you need 
import Matches from '../components/Matches'

const Collapsable = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color = "primary" onClick ={toggle} style = {{marginBottom: '1rem'}}>Click me!</Button>
            <Collapse isOpen={isOpen}> 
                <Matches />
            </Collapse>
        </div>
    );
}

export default Collapsable;