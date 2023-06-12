import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";



const Main = () => {
    const location = useLocation();
    const noNavFooter = location.pathname.includes('login')|| location.pathname.includes('signUp');
   

    return (
        <div>
            {noNavFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;