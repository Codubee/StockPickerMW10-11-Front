import React from 'react'


function Description(props){

    if(props.data.currentPrice){
        return(
            <div>
                <h2>{props.data.companyName}, {props.data.symbol}, {props.data.currentPrice}</h2>
            </div>
        )
    }
    else{
        return <></>
    }
}

export default Description