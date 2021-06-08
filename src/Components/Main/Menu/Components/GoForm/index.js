import React from 'react'
import 'goForm.css'
import GoButton from "./GoButton";

const GoForm = (props) =>
    <div>
        <label for={props.name}>{props.text}</label>
        <GoButton link="#" arrow="" />
    </div>

export default GoForm