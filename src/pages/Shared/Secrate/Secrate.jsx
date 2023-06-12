import { useLocation } from "react-router-dom";


const Secrate = () => {
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    return (
        <div>
            
        </div>
    );
};

export default Secrate;