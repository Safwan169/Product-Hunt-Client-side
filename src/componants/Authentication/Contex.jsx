import { useContext } from 'react';
import { myContext } from './Authentication';

const Contex = () => {
    const auth=useContext(myContext)
    return auth
};

export default Contex;