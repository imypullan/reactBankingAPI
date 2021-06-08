import React from 'react'
import './accountBox.css'

const AccountBox = (props) =>
    <div className="accountBox">
        <label>Name:</label>
        <span>{props.name}</span>
        <label>Balance:</label>
        <span>£{props.balance}</span>
    </div>

export default AccountBox