import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield, FaUsers } from 'react-icons/fa';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });


    const handleMakeAdmin=(id)=>{
        
    }
    const handleDelete = () => {

    }


    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <h3 className="text-3xl font-semibold">Total Users :{users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <th>{user.name}</th>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-ghost bg-orange-400 text-white "><FaUserShield></FaUserShield></button>
                                        }
                                    </td>
                                    <td><button onClick={()=>handleDelete()} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;