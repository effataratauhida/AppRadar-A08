import React, { useEffect, useState } from 'react';
import Navbar from './../../components/Header/Navbar';
import { Outlet, useNavigation, useRouteError } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';

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