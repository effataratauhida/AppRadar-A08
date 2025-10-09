import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingsIcon from '../../assets/icon-ratings.png'
import reviewsIcon from '../../assets/icon-review.png'

import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetail = () => {
    const allApps = useLoaderData();

    const { id } = useParams();

    const app = allApps.find( app => app.id === parseInt(id));
    if (!app) {
        return <p>app not found</p>
    }
    
    return (
        
        <div className='bg-[#E9E9E9] pt-20'>
            {/* card details */}
            <div className='max-w-11/12 mx-auto flex flex-col md:flex-row gap-10 pb-10 relative'>
                <img src={app.image} alt="" className='w-[350px] h-[350px] rounded-lg '/>
                <div>
                    <h2 className='font-bold text-3xl text-[#001931] mt-4'>{app.title}</h2>
                    <p className='text-xl text-[#327382] mt-2'>Developed by <span className='text-xl font-semibold 
                    bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{app.companyName}</span></p>
                    
                    <hr className='top-28 border-t-2 border-[#327382] absolute  w-2/3'/>
                    
                    <div className='flex gap-6 mt-12'>
                        {/* downloads */}
                        <div>
                            <img src={downloadIcon} alt=""   />
                            <p className='my-2 text-[#001931] text-base'>Downloads</p>
                            <h2 className='font-extrabold text-4xl text-[#001931]'>
                                {app.downloads >= 1000000 
                                ? ((app.downloads / 1000000) % 1 === 0 
                                ? (app.downloads / 1000000).toFixed(0) 
                                    : (app.downloads / 1000000).toFixed(1)) + "M"
                                    : app.downloads >= 1000
                                ? ((app.downloads / 1000) % 1 === 0 
                                ? (app.downloads / 1000).toFixed(0) 
                                    : (app.downloads / 1000).toFixed(1)) + "K"
                                    : app.downloads
                            }</h2>
                        </div>
                        {/* ratings */}
                        <div>
                            <img src={ratingsIcon} alt="" />
                            <p className='my-2 text-[#001931] text-base'>Average Ratings</p>
                            <h2  className='font-extrabold text-4xl text-[#001931]'>
                                {app.ratingAvg}</h2>
                        </div>
                        {/* reviews */}
                        <div>
                            <img src={reviewsIcon} alt="" />
                            <p className='my-2 text-[#001931] text-base'>Total Reviews</p>
                            <h2 className='font-extrabold text-4xl text-[#001931]'>
                                {app.reviews >= 1000000 
                                ? ((app.reviews / 1000000) % 1 === 0 
                                ? (app.reviews / 1000000).toFixed(0) 
                                    : (app.reviews / 1000000).toFixed(1)) + "M"
                                    : app.reviews >= 1000
                                ? ((app.reviews / 1000) % 1 === 0 
                                ? (app.reviews / 1000).toFixed(0) 
                                    : (app.reviews / 1000).toFixed(1)) + "K"
                                    : app.reviews}</h2>
                        </div>
                    </div>
                    <button className='mt-7 bg-[#00D390] py-3.5 px-5 rounded-sm font-semibold text-xl text-white cursor-pointer hover:scale-105'>Install Now 
                        (<span>{app.size}</span> MB)</button>
                </div>
                <hr className='bottom-0 w-full border-t-2 border-[#327382] absolute'/>
            </div>

              {/* ratings chart*/}
            <div className='pt-10 pb-6 max-w-11/12 mx-auto relative'>
               <h2 className=' text-2xl font-semibold pb-6'>Ratings</h2>
               <ResponsiveContainer width="100%" height={300}>
                <BarChart 
                    data = {app.ratings.slice().reverse()} layout="vertical">
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#FF8811" radius={0}>
                        
                    </Bar>
                </BarChart>
               </ResponsiveContainer>
               <hr className='bottom-0 w-full border-t-2 border-[#327382] absolute'/>
            </div>
            {/* description */}
            <div className='max-w-11/12 mx-auto pt-10 pb-16'>
                <h2 className=' text-2xl font-semibold pb-6'>Description</h2>
                <p>{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetail;