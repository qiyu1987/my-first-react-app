import React, {Component} from 'react'
import User from './User'
class UserBoard extends Component {
    render() {
        return (
            <div>
                <h2>UserBoard</h2>
                <User name = 'Alice'/>
                <User name = 'Bob'/>
                <User name = 'Charles'/>
            </div>
        )
    }
}
export default UserBoard