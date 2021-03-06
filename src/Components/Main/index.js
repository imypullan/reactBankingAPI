import React from 'react'
import './main.css'
import Menu from './Menu'
import DisplayContainer from "./DisplayContainer";

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <div className="displayGraphicsDark"></div>
                <div className="displayGraphicsMid"></div>
                <div className="displayGraphicsLight"></div>
                <DisplayContainer />
            </main>
        )
    }
}


export default Main