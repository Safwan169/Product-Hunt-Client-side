import React from 'react';
import Heading from '../../../All-Shared/Heading';
import { Link } from 'react-router-dom';
import couponsData from '../../../Fatching-data/couponsData';
import { TiEdit } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import axios from 'axios';

const Coupons = () => {
  const [coupons, refetchCoupons, isload] = couponsData();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://b9a12-server-side-safwan169.vercel.app/deleteCoupons/${id}`,
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Deleted!",
                text: "Your Coupon has been deleted.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            refetchCoupons();
          });
      }
    });
  };

  if (isload) {
    return (
      <span className="loading loading-ring absolute left-1/2 top-1/2 loading-lg"></span>
    );
  }

  return (
    <div className="w-full pl-12 md:pl-12 lg:pl-0 px-4 mt-8 lg:mt-20 md:mt-10 sm:px-6 lg:px-10 py-10">
      <>
        <Heading text={"Manage Coupons"} />

        <div className="overflow-x-auto w-full">
          <div className="lg:mx-32 mx-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-center lg:block hidden border">SL</th>
                  <th className="px-4 py-2 border">Coupon Code</th>
                  <th className="px-4 py-2 border">Expiry Date</th>
                  <th className="px-4 py-2 border">Discount Amount</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Edit</th>
                  <th className="px-4 py-2 border">Delete</th>
                  <th className="px-4 py-2 border">
                    <Link
                      className="btn bg-red-500 text-white font-bold px-3 py-1 rounded"
                      to={"/dashboard/addCoupons"}
                    >
                      Add Coupon
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {coupons?.map((data, index) => (
                  <tr
                    key={data._id}
                    className="hover:bg-gray-50 odd:bg-white even:bg-gray-50"
                  >
                    <td className="border px-4 text-center lg:block hidden py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{data.code}</td>
                    <td className="border px-4 py-2">{data.date}</td>
                    <td className="border px-4 py-2">{data.amount}</td>
                    <td className="border px-4 py-2">{data.description}</td>
                    <td className="border px-4 py-2 text-center">
                      <Link
                        to={`/dashboard/updateCoupons/${data._id}`}
                        className="btn border border-orange-200 text-green-400 rounded p-2"
                      >
                        <TiEdit size={20} />
                      </Link>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <span
                        onClick={() => handleDelete(data._id)}
                        className="btn border border-orange-200 text-red-500 rounded p-2 cursor-pointer"
                      >
                        <MdDelete size={20} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default Coupons;
