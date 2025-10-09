import React, { useEffect, useState } from 'react';
import Navbar from './../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';

const Root = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Navbar></Navbar>
            <Spinner navigationState={navigation.state} />
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;