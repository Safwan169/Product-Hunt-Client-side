import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const allReview = () => {
    
    const { refetch: reRev, data: rev =[],isLoading:isload} = useQuery({
        queryKey: ['rev', ],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/vvv`);
            return res.data;
        }
    })
    return [rev,reRev,isload]
};

export default allReview;