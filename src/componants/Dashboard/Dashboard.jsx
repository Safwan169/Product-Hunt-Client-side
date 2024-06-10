import React from 'react';
import Drawar from './Drawar';
import { Outlet } from 'react-router-dom';
import Contex from '../Authentication/Contex';

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