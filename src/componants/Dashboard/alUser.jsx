import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const alUser = () => {

    const { refetch:refetchUser, data: user2 = [],isLoading:isload} = useQuery({
        queryKey: ['user', ],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/user`);
            return res.data;
        }
    })
    return [user2,refetchUser,isload]
};

export default alUser;