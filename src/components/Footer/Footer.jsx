import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        
            <footer className='bg-[#001931]'>
                <div className='max-w-7xl mx-auto py-8 flex items-center justify-between'>
                    <div>
                        <img src={logo} alt="" className='h-20 w-20 mb-1' />
                        <h2 className='font-bold text-3xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                            bg-clip-text text-transparent'>AppRadar </h2>
                    </div>
                    <div>
                        <h5 className='text-gray-300 font-medium text-lg '>Services</h5>
                        <ul className='mt-3'>
                            <li className='hover:underline  text-gray-300'><a href="">Branding</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Design</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Marketing</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Advertisement</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-gray-300 font-medium text-lg '>Services</h5>
                        <ul className='mt-3'>
                            <li className='hover:underline  text-gray-300'><a href="">Branding</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Design</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Marketing</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Advertisement</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h5 className='text-gray-300 font-medium text-lg '>Services</h5>
                        <ul className='mt-3'>
                            <li className='hover:underline  text-gray-300'><a href="">Branding</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Design</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Marketing</a></li>
                            <li className='hover:underline text-gray-300'><a href="">Advertisement</a></li>
                            
                        </ul>
                    </div>
                   
                </div>
            </footer>

        
    );
};

export default Footer;