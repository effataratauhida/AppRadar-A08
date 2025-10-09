import React, { useEffect, useState } from 'react';

    const Spinner = ({ navigationState }) => {
             
        const [show, setShow] = useState(false);

        useEffect(() => {
        let timer;
            if (navigationState === "loading" || navigationState === "submitting") {
                timer = setTimeout(() => setShow(true), 500);
            } else {
                setShow(false);
            }
                return () => clearTimeout(timer);
        }, [navigationState]);

        if (!show) return null;
    

    return (
         <div className="fixed inset-0 flex items-center justify-center bg-purple-100 bg-opacity-30 z-50">
      <div className="w-24 h-24 border-4 border-t-purple-800 border-b-purple-800 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
    </div>

    );
};

export default Spinner;