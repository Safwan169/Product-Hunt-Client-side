// import React from 'react';

// import { PieChart } from "@mui/x-charts";

// import { PieChart } from "@mui/x-charts";

// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
import React, { PureComponent, useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import alUser from './alUser';
import { myContext } from '../Authentication/Authentication';
import Alldata from '../Alldata';
import Heading from './Heading';

const Statistics = () => {
    const [cart, refetch] = Alldata()


    const [user2, refetchUser,] = alUser()

    const { dep, setDep, user } = useContext(myContext)
    // console.log(user[0])
    const user3 = user2.filter(d => d.email !== user.email)

    const [dd, setDD] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/vvv')
            .then(res => res.json())
            .then(data => setDD(data))
    }, [])
    const data01 = [
        { name: 'Total User', value: user3?.length },
        { name: 'Total Products', value: cart?.length },
        { name: 'Total Reviews', value: dd?.length },
    ];


    return (







          <ResponsiveContainer width="100%" height="100%">
        <div className=' text-center flex px-5 items-center flex-col'>
            <Heading text={'Statistics'}></Heading>

            <PieChart className='' width={500} height={500}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
           </ResponsiveContainer>
    );
}
// }

// );
// };

export default Statistics;