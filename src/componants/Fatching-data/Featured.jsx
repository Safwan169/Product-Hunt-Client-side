import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Featured = () => {
    const { refetch:refetch1, data: featured = [],isLoading} = useQuery({
        queryKey: ['featured', ],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/fetured`);
            return res.data;
        }
    })
    return [featured,refetch1,isLoading]
};

export default Featured;