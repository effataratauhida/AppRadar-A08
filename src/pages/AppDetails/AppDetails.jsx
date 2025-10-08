import React from 'react';
import { useLoaderData } from 'react-router';

const AppDetail = () => {

    const app = useLoaderData();
    
    return (
        <div>
            <h1>apppp detailss</h1>
        </div>
    );
};

export default AppDetail;