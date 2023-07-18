
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../hooks/UseAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const { user } = UseAuth()

    const [axiosSecure] = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            return res.data
        }
    })

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss |Payment History</title>
            </Helmet>
            
            <SectionTitle
                subHeading='At a Glance!'
                heading='payment history'
            ></SectionTitle>
            <div className="uppercase  font-semi-bold h-[60] flex justify-evenly items-center">
                <h3 className="text-3xl">total Payment:{payments.length}</h3>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Category</th>
                            <th>Total Price</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((item,) => <tr
                                key={item._id}
                            >

                                <td>
                                    {item.email}
                                </td>
                                <td>
                                    Food
                                </td>
                                <td>${item.price}</td>
                                <td>
                                    {item.Date}
                                </td>
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;