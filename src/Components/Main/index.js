import React from 'react'
import './main.css'
import Menu from './Menu'

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
                <Menu />
            </main>
        )
    }
}


export default Main