import React from 'react'
import '../styles/View.css'

function View(props){
    return(
        <img className={props.className+" view-image"} src="https://picsum.photos/900" alt="logo"></img>
    )
}

export default View