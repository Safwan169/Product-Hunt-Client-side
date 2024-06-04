import React from 'react';
import { useParams } from 'react-router-dom';
import From from './componants/Dashboard/From';
import Heading from './componants/Dashboard/Heading';

const Update = () => {
    const data=useParams().id
    console.log(data)
    return (
        <div>
            <Heading text={"Update Your Product"}> </Heading>
            <From></From>
        </div>
    );
};

export default Update;