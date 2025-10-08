import React from 'react';
import { useLoaderData } from 'react-router';

const Installation = () => {

    const allApps = useLoaderData();
    return (
        <div className='bg-[#E9E9E9] pb-20'>
            {/* title & description */}
            <div className='max-w-11/12 mx-auto pt-20 pb-10 text-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-[#001931]'>Your Installed Apps</h1>
                <p className='text-base md:text-lg text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* found apps number & sort by */}
            <div className='max-w-11/12 mx-auto pb-10 flex items-center justify-between'>
                <p className='text-2xl font-semibold text-[#001931]'>({allApps.length}) Apps Found</p>
                
                <select id="options" name="options" 
                className=' border-2 border-gray-400 py-3 px-4 rounded-sm text-gray-500'>
                    <option value="one">Sort By Size</option>
                    <option value="two">Option Two</option>
                    <option value="three">Option Three</option>
                  </select>
            </div>
        </div>
    );
};

export default Installation;