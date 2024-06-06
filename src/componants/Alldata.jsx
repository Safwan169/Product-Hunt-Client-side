
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Alldata = () => {
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', ],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/alldata`);
            return res.data;
        }
    })
    return [cart,refetch]
};

export default Alldata;