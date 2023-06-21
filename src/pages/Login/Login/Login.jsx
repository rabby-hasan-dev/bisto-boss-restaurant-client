import {  useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import UseAuth from '../../../hooks/UseAuth';

const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { loginUser } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: 'User Login successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })

    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;


        if (validateCaptcha(user_captcha_value) == true) {

            setDisabled(false)
        }

        else {
            alert('Captcha Does Not Match');
            setDisabled(true);
        }
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">

                                        <LoadCanvasTemplate />

                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="input the captcha above" className="input input-bordered" />


                                </div>
                                <div className="form-control mt-6">

                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>
                            </form>
                            <p> <small> New Here? <Link className='link' to='/signUp'>Create an Account</Link> </small></p>
                        </div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;