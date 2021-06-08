import React from 'react'
import './footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <footer>
                <span><i className="fas fa-home homeIcon"></i></span>
            </footer>
        )
    }
}

export default Footer