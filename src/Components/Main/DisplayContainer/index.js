import React from 'react'
import './displayContainer.css'
import ActivityTitle from "./Components/ActivityTitle";
import GetAccounts from "./GetAccounts"

const DisplayContainer = () =>
    <div className="displayContainer">
        <ActivityTitle title="All accounts" />
        <GetAccounts />
    </div>



export default DisplayContainer