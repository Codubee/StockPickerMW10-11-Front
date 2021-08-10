import React from 'react'
import { Button } from 'reactstrap';

class ButtonClick extends React.Component {
    constructor() {
        super()
        //Setting a default value
        this.state = { answer: "" }
 
     
        //Bind Methods
        this.Yes= this.Yes.bind(this)
        this.No= this.No.bind(this)
    }

        //This is the method that will be called with a button click.

    Yes() {
        this.setState({  answer: "Yes" })
    }
    No() {
        this.setState({  answer: "No" })
    }

    render() {
        return (
            <div>
                
               {/*  Display for testing
                <h1>You choose {this.state. answer}</h1>
                */ }


                {/* 
                   Creation of button
                */}
                <Button color="danger" size= "lg" onClick={this.No}>No</Button>
                <Button color="success" size= "lg" onClick={this.Yes}>Yes</Button>
            </div>
        )

    }
}
export default ButtonClick;