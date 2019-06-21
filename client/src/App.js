import React from 'react';
import './App.css';
import {NavLink, Route, withRouter} from 'react-router-dom';
import Login from './components/auth/login';
import Users from './components/auth/users/users';
import Signup from './components/auth/signup';

function App(props) {
  const logout = e => {
    e.preventDefault()
    localStorage.removeItem('token');
    props.history.push('/login');
  };

  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to='/signup'>signup</NavLink>
          <NavLink to='/login'>Login</NavLink>
          `&nbsp;|&nbsp;`
          <NavLink to='/users'>Users</NavLink>
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <main>
        <Route to='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/users' component={Users} />
      </main>
    </div>
  );
}

export default withRouter(App);
