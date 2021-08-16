import React from 'react'


function Description(props){

    return(
        <div>
            <p>{props.companyName}, {props.symbol}, {props.price}</p>
        </div>
    )
}

export default Description