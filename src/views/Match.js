import React from 'react'
import {Button} from 'reactstrap'
import View from '../components/View'
import {Container} from 'reactstrap'
import Collapsable from '../components/Collapsable'
import '../styles/Match.css'
import Description from '../components/Description'
import axios from 'axios'

class Match extends React.Component{
    constructor(props) {
        super(props)
        //Setting a default value
        this.state = { answer: "" }
     
        //Bind Methods
        this.Yes= this.Yes.bind(this)
        this.No= this.No.bind(this)
        this.addStock = this.addStock.bind(this);
    }

    Yes() {
        alert('clicked yes')
        this.addStock()
    }
    No() {
        alert('clicked no')
    }

    addStock() {
        var body = {
            "userId":"20",
            "stock":{"companyName":"Microsoft","symbol":"MSFT","image":"","stockId":"19"}
        }

        axios.post("https://stockpicker-mw11-12-back.herokuapp.com/addStock", body)
            .then((response) => {
                console.log(response.data);
                
            })
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