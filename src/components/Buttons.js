import React from 'react'
import { Button } from 'reactstrap';

class Buttons extends React.Component {
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
        alert('clicked yes')
    }
    No() {
        alert('clicked no')
    }

    render() {
        return (
            <div className="text-center">
                <Button color="danger" size= "lg" onClick={this.No}>No</Button>
                <Button color="success" size= "lg" onClick={this.Yes}>Yes</Button>
            </div>
        )

    }
}
export default Buttons;