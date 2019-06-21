import React, {Component} from 'react';
import axios from 'axios';
import requiresAuth from '../requiresAuth';

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios
        .get('/users')
        .then(res => {
            this.setState({
                users: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        if (this.state.users.length === 0) {
            return <div>Loading...</div>
        }
        
    
        return (
            <div>
            <h2>List of Users</h2>
            <ul>
                {this.state.users.map(user => (
                    <li key={user.id}>{user.username}>{user.department}</li>
                ))}
            </ul>
            </div>
        )
    }
}

export default requiresAuth(Users);