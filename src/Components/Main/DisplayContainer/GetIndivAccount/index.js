import React from 'react'

class GetAccountById extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            account: [],
            id: ""
        }
    }

    handleChange = (event) => {
        this.setState({id: event.target.value})
    }

    handleSubmit = (event) => {
        alert('you will search for ' + this.state.id)
        event.preventDefault()
    }



    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            User ID:
                            <input type="text" value={this.state.id} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        )
    }
}


export default GetAccountById