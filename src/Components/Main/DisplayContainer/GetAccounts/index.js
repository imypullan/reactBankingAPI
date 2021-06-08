import React from 'react'
import './getAccounts.css'
import AccountBox from './AccountBox'

const GetAccounts = (props) =>
    <div className="accountsDisplay">
        <div><AccountBox name="Imy Pullan" balance="400"/></div>
        <div><AccountBox name="Kate Hunt"  balance="600"/></div>
        <div><AccountBox name="Brian Hunt" balance="800"/></div>
        <div><AccountBox name="Ollie Lloyd" balance="25"/></div>
        <div><AccountBox name="Solly Pullan" balance="80000"/></div>
        <div><AccountBox name="Eleanor Lloyd" balance="1000"/></div>
        <div><AccountBox name="David Lloyd" balance="300"/></div>
    </div>

export default GetAccounts