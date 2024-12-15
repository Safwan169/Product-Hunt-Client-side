import React, { useContext, useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import alUser from '../../../Fatching-data/alUser';
import { myContext } from '../../../Authentication/Authentication';
import Alldata from '../../../Fatching-data/Alldata';
import Heading from '../../../All-Shared/Heading';

const Statistics = () => {
    const [cart, refetch] = Alldata();
    const [user2, refetchUser] = alUser();
    const { dep, setDep, user } = useContext(myContext);

    const user3 = user2.filter((d) => d.email !== user.email);

    const [dd, setDD] = useState();
    useEffect(() => {
        fetch('https://b9a12-server-side-safwan169.vercel.app/vvv')
            .then((res) => res.json())
            .then((data) => setDD(data));
    }, []);

    const data01 = [
        { name: 'Total User', value: user3?.length, fill: '#cd1c18' }, // Red
        { name: 'Total Products', value: cart?.length, fill: '#4052d6' }, // Blue
        { name: 'Total Reviews', value: dd?.length, fill: '#dba400' }, // Yellow
    ];

    return (
        <div className="w-full flex flex-col mt-20 items-center py-8 px-4 sm:px-6 lg:px-20">
            {/* Heading Component */}
            <Heading text={'Statistics'} />

            {/* Chart Container */}
            <div className="w-full max-w-full md:max-w-3xl lg:max-w-4xl mt-8">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={data01}
                            cx="50%"
                            cy="50%"
                            outerRadius={"60%"}
                            label={({ name, percent }) =>
                                `${name}: ${(percent * 100).toFixed(0)}%`
                            }
                            isAnimationActive={true}
                        />
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Add some spacing for mobile screens */}
            <div className="h-8 md:h-12"></div>
        </div>
    );
};

export default Statistics;
