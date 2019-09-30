import React, {Component} from 'react'
class User extends Component {
    state = {
        presence: true
    }
    toggle = () => {
        this.setState(
            {
                presence: !this.state.presence
            }
        )
    }
    render(){
        return (
        <div>
            <p>
                User: <b>{this.props.name}</b>
            </p>
            <p>
                {this.props.name} is <b>{this.state.presence ? '':'not '}</b>
                present
            </p>
            <button onClick = {this.toggle} >Toggle</button>
        </div>
        )
    }
}
export default User