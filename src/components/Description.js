import React from 'react'


function Description(props){

    if(props.price){
        return(
            <div>
                <p>{props.companyName}, {props.symbol}, {props.price}</p>
            </div>
        )
    }
    else{
        return <></>
    }
}

export default Description