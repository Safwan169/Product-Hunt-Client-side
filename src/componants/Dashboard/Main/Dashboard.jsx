import React from 'react';
import Drawar from './shared/Drawar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    // const {user}=Contex()
    // console.log(user)
    return (
        <div>
            <div>
            <Drawar ></Drawar>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;