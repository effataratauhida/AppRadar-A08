import React, { Suspense, useState } from 'react';
import SingleApp from '../SingleApp/SingleApp';



const TrendingApps = ({data}) => {
    
    return (
        <div className='bg-[#E9E9E9]'>
            {/* trending apps */}
        <div className='max-w-10/12 mx-auto py-16'>
            <div className='text-center'>
                <h2 className='font-bold text-5xl text-[#001931]'>Trending Apps</h2>
                <p className='text-[#627382] text-xl pt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            {/*  card layout */}
            <div className='max-w-11/12 mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                {
                    data.map((app) => (
                        <SingleApp key={app.id} app={app} ></SingleApp>
                    ))
                }
            </div>
            </div>
            
        </div>
        </div>
    );
};

export default TrendingApps;