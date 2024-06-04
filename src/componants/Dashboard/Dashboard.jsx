import React from 'react';
import Drawar from './Drawar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
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