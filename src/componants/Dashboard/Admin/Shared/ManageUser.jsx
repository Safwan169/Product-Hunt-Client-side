import React, { useContext } from 'react';
import Heading from '../../../All-Shared/Heading';
import alUser from '../../../Fatching-data/alUser';
import { MdAddModerator, MdAdminPanelSettings } from 'react-icons/md';
import axios from 'axios';
import { myContext } from '../../../Authentication/Authentication';

const ManageUser = () => {
    const [user2, refetchUser] = alUser();
    const { dep, setDep, user } = useContext(myContext);

    const user3 = user2.filter((d) => d.email !== user.email);

    const handleStatus = (id, text) => {
        const data = text;
        const dd = { data };
        axios
            .put(`https://b9a12-server-side-safwan169.vercel.app/roleChanged/${id}`, dd)
            .then(() => {
                refetchUser();
                setDep(!dep);
            });
    };

    return (
        <div className="w-full md:pl-16 px-4 sm:px-6 lg:mt-20 md:mt-10 lg:px-20 py-10 overflow-hidden">
            <Heading text={'All Users'} />

            <div className="overflow-x-auto">
                <div className="w-full max-w-full mx-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4  text-center py-2 ">SL</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">User Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">User Email</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
                                <th className="border border-gray-300 lg:text-center px-4 py-2 text-left">Admin/Moderator</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user3?.map((data, index) => (
                                <tr key={data._id} className="odd:bg-white even:bg-gray-50">
                                    <td className="border border-gray-300  px-4 text-center    py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2 font-bold">
                                        {data?.name}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 font-bold text-red-500">
                                        {data.email}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 font-bold text-blue-500">
                                        {data.status}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 justify-center  flex flex-wrap gap-4">
                                        {data.status === 'Admin' ? (
                                            <MdAdminPanelSettings
                                                className="text-gray-400"
                                                size={35}
                                            />
                                        ) : (
                                            <MdAdminPanelSettings
                                                onClick={() => handleStatus(data._id, 'Admin')}
                                                className="text-blue-500 cursor-pointer"
                                                size={35}
                                            />
                                        )}
                                        {(data.status === 'Moderator' || data.status === 'Admin') ? (
                                            <MdAddModerator
                                                className="text-gray-400"
                                                size={35}
                                            />
                                        ) : (
                                            <MdAddModerator
                                                onClick={() => handleStatus(data._id, 'Moderator')}
                                                className="text-blue-500 cursor-pointer"
                                                size={35}
                                            />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;
