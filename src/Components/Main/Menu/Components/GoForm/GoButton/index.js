import React from 'react'
import './goButton.css'

const GoButton = (props) => <a href={props.link}><button>{props.arrow}</button></a>


export default GoButton