import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: 'ant',
        password: 'pass1'

    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const endpoint = 'http://localhost:6500/api/auth/login';

        axios
        .post(endpoint, this.state)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/users');
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <>
            <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
              id="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
            </>

        )
    }
}

export default Login