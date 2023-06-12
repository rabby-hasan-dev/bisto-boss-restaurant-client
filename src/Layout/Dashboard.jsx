import { FaHome, FaShoppingCart, FaWallet, FaCalendarAlt, FaShoppingBag, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
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
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] ">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/home" ><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/dashboard/reservation" ><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>

                        <li><NavLink to="/dashboard/history" ><FaWallet></FaWallet>Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/mycart" ><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>

                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to="/menu"> MENU</Link></li>
                        <li> <Link to='/order/salad'> <FaShoppingBag></FaShoppingBag> ORDER</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;