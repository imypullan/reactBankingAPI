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
                <div className="displayGraphics">Vertical lines to go here</div>
                <Menu />
            </main>
        )
    }
}


export default Main