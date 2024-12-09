
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Alldata = () => {
    const { refetch, data: cart = [],isLoading} = useQuery({
        queryKey: ['cart', ],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/alldata`);
            return res.data;
        }
    })
    return [cart,refetch,isLoading]
};

export default Alldata;