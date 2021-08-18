import React from 'react'
import '../styles/View.css'

function View(props){
    return(
        <img className={props.className+" view-image"} src="https://picsum.photos/900"></img>
    )
}

export default View