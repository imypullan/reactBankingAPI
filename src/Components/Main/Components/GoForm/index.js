import React from 'react'
import './goForm.css'
import GoButton from "./GoButton";

const GoForm = (props) =>
    <a href={props.link}>
        <div className="menuItem">
             <label for={props.text}>{props.text}</label>
            <GoButton />
        </div>
    </a>

export default GoForm