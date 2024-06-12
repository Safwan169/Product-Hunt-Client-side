
import { useQuery } from "@tanstack/react-query";
import Contex from "../Authentication/Contex";
import axios from "axios";

const UseCart = () => {
    const { user} = Contex();
    console.log(user,'asdf')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axios.get(`https://b9a12-server-side-safwan169.vercel.app/myData/${user.email}`,{ withCredentials: true });
            return res.data;
        }
    })

    return [cart, refetch]
};

export default UseCart;