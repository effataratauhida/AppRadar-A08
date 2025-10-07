import React from 'react';
import gitImg from '../../assets/git.png'
import logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 flex items-center justify-between">

            <div className='flex items-center gap-1'>
                <img className='w-10 h-10' src={logo} alt="" />
                <h2 className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                    bg-clip-text text-transparent font-bold text-base'>AppRadar</h2>
            </div>
            
            <div>
                <ul className='flex items-center gap-8'>
                    <li className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                    bg-clip-text text-transparent font-semibold text-base'>Home</li>
                    <li className='text-base font-medium'>Apps</li>
                    <li className='text-base font-medium'>Installation</li>
                </ul>
            </div>
            <button className='rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center gap-2.5 py-3 px-4'>
                <img src= {gitImg} alt="" />
                <p className='text-white font-semibold text-base'>Contribute</p>
            </button>
  

</div>
    );
};

export default Navbar;