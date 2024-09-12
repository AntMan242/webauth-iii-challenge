import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(options =>{
options.headers.authorization = localStorage.token;
return options;
}, 
err => {

 return Promise.reject
})

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.token
            const logMessage = <div>Please login to see the users</div>;

            return <>{token ? <Component {...this.props}/> : logMessage}</>
        
            
        }
    }
}