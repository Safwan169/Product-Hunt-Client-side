import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const couponsData = () => {
    
    const { refetch:refetchCoupons, data: coupons = [],isLoading:isload} = useQuery({
        queryKey: ['coupons', ],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/coupons`);
            return res.data;
        }
    })
    return [coupons,refetchCoupons,isload]
};

export default couponsData;