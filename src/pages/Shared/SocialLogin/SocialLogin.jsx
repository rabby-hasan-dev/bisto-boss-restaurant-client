import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUsers = { name: loggedUser.displayName, email: loggedUser.email, }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUsers)

                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider "></div>
            <div className="w-full text-center">

                <button className="btn btn-circle btn-outline">
                    <FaFacebook></FaFacebook>
                </button>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle btn-outline">
                    <FaGithub></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;