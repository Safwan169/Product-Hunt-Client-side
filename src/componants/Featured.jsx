import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Featured = () => {
    const { refetch:refetch1, data: featured = [],isLoading} = useQuery({
        queryKey: ['featured', ],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/fetured`);
            return res.data;
        }
    })
    return [featured,refetch1,isLoading]
};

export default Featured;