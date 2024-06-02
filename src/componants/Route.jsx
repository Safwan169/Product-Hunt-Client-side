import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Route;