import React from 'react';
import Alldata from './componants/Alldata';
import alUser from './componants/Dashboard/alUser';

const DataLoad = ({children}) => {
    const[cart,refetch,isLoading]=Alldata()
    const[isload]=alUser()
    if (isLoading ) {
        return <span className="loading loading-ring absolute left-1/2 top-1/2 loading-lg"></span>

        
    }
    else if (!isLoading) {
        // refetch()
        return children
        
       }
};

export default DataLoad;