import React from 'react';
import Login from './login';

export default class Jump extends React.Component {
    render() {
        return (
            <div className='container card w-75'>
                <h1 className='card-body'>
                    Please Log In
                </h1>
                <div className='card-footer'>
                    <Login />
                </div>
            </div>
        )
    }
}