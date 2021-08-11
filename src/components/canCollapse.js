import React, {useState} from 'react';
import { Collapse, Button } from 'reactstrap'; //Add whatever elements you need 

const CanCollapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button color = "primary" onClick ={toggle} style = {{marginBottom: '1rem'}}>Click me!</Button>
            <Collapse isOpen={isOpen}> 
                <h1>This is how collapse works</h1> {/*All the collapse-able elements for the button are in here*/}
            </Collapse>
        </div>
    );
}

export default CanCollapse;