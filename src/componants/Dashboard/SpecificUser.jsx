import React from 'react';
import Contex from '../Authentication/Contex';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const SpecificUser = () => {
    const {user}=Contex()
    

    const { refetch:refetchUserSpecific, data: specificUser = [],isLoading:Load} = useQuery({
        queryKey: ['specificUser', ],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/user/${user.email}`);
            return res.data;
        }
    })
    return [specificUser,refetchUserSpecific,Load]
};

export default SpecificUser;