import React from 'react'
import './menu.css'
import GoForm from "./Components/GoForm";

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <GoForm />
                <GoForm />
                <GoForm />
                <GoForm />
                <GoForm />
                <GoForm />
            </div>
        )
    }
}

export default Menu