import React from 'react'
import './accountBox.css'

const AccountBox = (props) =>
    <div className="accountBox">
        <label className="nameLabel">Name:</label>
        <span className="nameSpan">{props.name}</span>
        <label>Balance:</label>
        <span>£{props.balance}</span>
    </div>

export default AccountBox