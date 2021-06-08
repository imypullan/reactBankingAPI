import React from 'react'
import './menu.css'
import GoForm from "./Components/GoForm";

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="menuContainer">
                <GoForm link="#" text="Get All Accounts"/>
                <GoForm link="#" text="Get User by ID"/>
                <GoForm link="#" text="Send Money"/>
                <GoForm link="#" text="Add New User"/>
                <GoForm link="#" text="Add/Remove Money"/>
                <GoForm link="#" text="Remove User"/>
            </div>
        )
    }
}

export default Menu