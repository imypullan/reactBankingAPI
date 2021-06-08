import React from 'react'
import './getAccounts.css'
import AccountBox from './AccountBox'

class GetAccounts extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        isLoaded: false,
                        accounts: []
                }
        }

        componentDidMount() {
                fetch("http://localhost:3005/accounts")
                    .then(res => res.json())
                    .then(
                        (res) => {
                                this.setState({
                                        isLoaded: true,
                                        accounts: res.data
                                })
                        }
                    )
        }

        render() {
                return (
                    <div className="accountsDisplay">
                        {this.state.accounts.map(account =>
                            (
                                <span>Name: {account.name}
                                Balance: {account.balance}</span>
                            ))}
                    </div>
                )
        }
}


export default GetAccounts