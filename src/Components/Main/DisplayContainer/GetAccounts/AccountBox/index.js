import React from 'react'
import './accountBox.css'

const AccountBox = (props) =>
    <div>
        <h5>Name:</h5>
        <span>{props.name}</span>
        <h5>Balance:</h5>
        <span>£{props.balance}</span>
    </div>

export default AccountBox