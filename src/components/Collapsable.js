import React, {useState} from 'react';
import { Collapse, Button } from 'reactstrap'; //Add whatever elements you need 
import Matches from '../components/Matches'

class Collapsable extends React.Component {

    constructor(props){
        super(props)
        this.state = {isOpen:false}
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({isOpen:!this.state.isOpen})

        //Place API call here

    }

    render(){
        return (
            <div className={this.props.className}>
                <Button color = "primary" onClick ={this.toggle} style = {{marginBottom: '1rem'}}>View Matches</Button>
                <Collapse isOpen={this.state.isOpen}> 
                    <Matches />
                </Collapse>
            </div>
        );
    }
    
}

export default Collapsable;
