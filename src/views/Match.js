import React from 'react'
import {Button} from 'reactstrap'
import View from '../components/View'
import {Container} from 'reactstrap'
import Collapsable from '../components/Collapsable'
import '../styles/Match.css'
import Description from '../components/Description'

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
                <View className="pt"/>
                <Description/>
                <div className="pt">
                    <Button color="danger"  onClick={this.No}>No</Button>
                    <Button color="success"  onClick={this.Yes}>Yes</Button>
                </div>
                <Collapsable className="pt"/>
            </Container>
        )
    }
}

export default Match