import { FaHome, FaShoppingCart, FaWallet, FaCalendarAlt, FaShoppingBag, FaToggleOn, FaUtensils, FaBook, FaUsers, FaBars, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = UseCart();

    // const isAdmin=false;
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] uppercase ">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>   <li><NavLink to="/dashboard/home" ><FaHome></FaHome>Admin Home</NavLink></li>

                                <li><NavLink to="/dashboard/addItem" > <FaUtensils></FaUtensils> Add an Items</NavLink></li>

                                <li><NavLink to="/dashboard/manageItems" ><FaBars></FaBars> Manage Item</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/manageBooking" > <FaBook></FaBook> Manage Booking</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers" > <FaUsers></FaUsers> All Users</NavLink>
                                </li>
                            </> : <>
                                <li><NavLink to="/dashboard/home" ><FaHome></FaHome>Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation" ><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>

                                <li><NavLink to="/dashboard/history" ><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/mycart" ><FaShoppingCart></FaShoppingCart>My Cart <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink>
                                </li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to="/menu"> <FaBars></FaBars>  MENU</Link></li>
                        <li> <Link to='/order/salad'> <FaShoppingBag></FaShoppingBag> ORDER</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;