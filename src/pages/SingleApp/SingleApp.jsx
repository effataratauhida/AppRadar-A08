import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'

const SingleApp = ({ app }) => {
    return (
        <div className='bg-blue-300 p-4 rounded-sm'>
                            <img src={app.image} alt="" className='w-full rounded-lg'/>
                                <h2 className='font-medium text-xl text-[#001931] mt-4'>{app.title}</h2>
                                <div>
                                    {/* downloads */}
                                    <button>
                                        <img src={downloadIcon} alt="" />
                                        <p>{app.downloads}</p>
                                    </button>
                                    {/* ratings */}
                                    <button>
                                        <img src={downloadIcon} alt="" />
                                        <p>{app.ratingAvg}</p>
                                    </button>
                                </div>
                         </div>
    );
};

export default SingleApp;