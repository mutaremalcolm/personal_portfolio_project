import React, { useState, useEffect } from 'react';

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        let debounceTimeout;

        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight;

            if (scrollHeight > 0) {
                setCompletion(Number((currentProgress / scrollHeight) * 100).toFixed(2));
            }
        };

        const handleScroll = () => {
            clearTimeout(debounceTimeout);
            
            
            debounceTimeout = setTimeout(updateScrollCompletion, 100); 
        };

       
        window.addEventListener('scroll', handleScroll);

        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return completion;
};

export default useScrollProgress;
