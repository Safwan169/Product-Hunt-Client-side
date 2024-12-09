import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const allReview = () => {
    
    const { refetch: reRev, data: rev =[],isLoading:isload} = useQuery({
        queryKey: ['rev', ],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/vvv`);
            return res.data;
        }
    })
    return [rev,reRev,isload]
};

export default allReview;