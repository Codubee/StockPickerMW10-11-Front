import React from 'react'
import {Button} from 'reactstrap'
import View from '../components/View'
import {Container} from 'reactstrap'
import Collapsable from '../components/Collapsable'

class Match extends React.Component{
    constructor() {
        super()
        //Setting a default value
        this.state = { answer: "" }
     
        //Bind Methods
        this.Yes= this.Yes.bind(this)
        this.No= this.No.bind(this)
    }

    Yes() {
        alert('clicked yes')
    }
    No() {
        alert('clicked no')
    }


    render(){
        return(
            <Container className="text-center">
                <View/>
                <Button color="danger" size= "lg" onClick={this.No}>No</Button>
                <Button color="success" size= "lg" onClick={this.Yes}>Yes</Button>
                <Collapsable/>
            </Container>
        )
    }
}

export default Match