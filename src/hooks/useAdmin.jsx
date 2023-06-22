import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user}=UseAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const{data:isAdmin, isLoading:isAdminLoading}=useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async ()=>{
            const res=await axiosSecure.get(`users/admin/${user?.email}`);
            console.log('isAdmin response', res);
            return res.data.admin;
        }
    })

    return [isAdmin,isAdminLoading]

};

export default useAdmin;