import {  useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ReportDataHook = () => {
    const { refetch:refetchReport, data: reportData = [],isLoading} = useQuery({
        queryKey: ['reportData', ],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/getReport`);
            return res.data;
        }
    })
    return [reportData,refetchReport,isLoading]
};

export default ReportDataHook;