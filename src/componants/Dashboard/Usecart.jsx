
import { useQuery } from "@tanstack/react-query";
import Contex from "../Authentication/Contex";
import axios from "axios";

const UseCart = () => {
    const { user} = Contex();
    console.log(user,'asdf')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/myData/${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default UseCart;