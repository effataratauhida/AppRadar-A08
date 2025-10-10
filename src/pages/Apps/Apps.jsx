import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';


const Apps = () => {
       const allApps = useLoaderData();
       const [searchTerm, setSearchTerm] = useState('');

       // filters apps
       const filteredApps = allApps.filter(app => 
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
       );
       

    // app show list
    const appsToShow = searchTerm === '' ? allApps : filteredApps;

    return (

       <div className='bg-[#E9E9E9] pb-20'>
            {/* title & description */}
            <div className='max-w-11/12 mx-auto pt-20 pb-10 text-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-[#001931]'>Our All Applications</h1>
                <p className='text-base md:text-lg text-[#627382] mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            {/* apps found by search */}
            <div className='max-w-11/12 mx-auto pb-10 flex flex-col md:flex-row items-center justify-between'>
                <p className='text-xl md:text-2xl font-semibold text-[#001931]'>
                    {searchTerm === '' ? `(${allApps.length}) Apps Found` 
                    : `(${filteredApps.length}) Apps Found`}</p>

                {/* search bar */}
                <div className='relative mt-3 md:mt-0'>
                    <input type="search" name="search" value={searchTerm}  placeholder='Search Apps'
                    className=' border-2 border-gray-400 py-2 pl-10 rounded-sm text-gray-800'
                    onChange={(e) => setSearchTerm(e.target.value)}/>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5"  />
                </div>
            </div>

             {/* all apps cards & search result*/}

             <div className='max-w-11/12 mx-auto'>
                  
                  {appsToShow.length === 0 && searchTerm !== '' ? (
                    <div className='text-center text-5xl font-extrabold text-gray-500 '>
                        No Apps Found!
                    </div>
                    
                  ) : (
                    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {appsToShow.map(app => (
                            <SingleApp key={app.id} app={app} ></SingleApp>
                        ))}
                    </div>
                  )}
               
                

            </div>
        </div>

    );
};

export default Apps;