import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Contex from '../Authentication/Contex';

const AddorNot = () => {
    const {user}=Contex()
    
const {refetch:refetchYesOrNot,data:YesOrNOt=[]}=useQuery({
    queryKey:['YesOrNot'],
    queryFn:async()=>{
        const res=await axios(`https://b9a12-server-side-safwan169.vercel.app/alldata/${user.email}`)
        return res.data
    }
})
return[YesOrNOt,refetchYesOrNot]


};

export default AddorNot;