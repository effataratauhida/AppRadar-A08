import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import demoImg from '../../assets/demo-app (2).webp'
import downloadIcon from '../../assets/icon-downloads.png'
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const Apps = () => {
       const allApps = useLoaderData();

    return (

        /// title & search bar
        <div className='bg-[#E9E9E9] pb-20'>
            <div className='max-w-11/12 mx-auto pt-20 pb-10 text-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-[#001931]'>Our All Applications</h1>
                <p className='text-base md:text-lg text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='max-w-11/12 mx-auto pb-10 flex items-center justify-between'>
                <p className='text-2xl font-semibold text-[#001931]'>(132) Apps Found</p>
                <div className='relative'>
                    <input type="search" name="search" id=""  placeholder='Search Apps'
                    className=' border-2 border-gray-400 py-2 pl-10 rounded-sm text-gray-500'/>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"  />
                </div>
                

            </div>
             {/* all apps cards */}

             <div className='max-w-11/12 mx-auto'>
             <div  className='grid grid-cols-4 gap-4'>
                {
                    allApps.map((app) => (
                        <SingleApp key={app.id} app={app} ></SingleApp>
                    ))
                }
                 
             </div>

             </div>
        </div>

        // show all the cards from json data

        

    );
};

export default Apps;