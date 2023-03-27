import { useEffect } from 'react';

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Car Medic`;
    }, [title]);
    
};

export default useTitle;