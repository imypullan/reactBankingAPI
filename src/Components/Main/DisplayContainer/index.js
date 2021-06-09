import React from 'react'
import './displayContainer.css'
import ActivityTitle from "./Components/ActivityTitle";
import GetAccountById from "./GetIndivAccount";

const DisplayContainer = () =>
    <div className="displayContainer">
        <ActivityTitle title="All accounts" />
        <GetAccountById />
    </div>



export default DisplayContainer