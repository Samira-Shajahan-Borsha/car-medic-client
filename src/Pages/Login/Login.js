import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    useTitle('Log In');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                // console.log('login', user);

                const currentUser = {
                    email: user?.email
                };
                // console.log(currentUser);

                //get jwt token
                fetch('https://car-medic-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        //local storage is easiest . but not the best place to store jwt token.
                        localStorage.setItem('car-medic-token', data.token);
                        form.reset();
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-11">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2  rounded-xl">
                    <h1 className="text-3xl font-bold text-center mt-16">Login </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-0 normal-case bg-orange-600 hover:bg-orange-600" value="Sign In" />
                        </div>
                    </form>
                    <p className='text-center mb-16 text-lg font-semibold'>New to Car Medic? <Link to='/signup'><span className='text-orange-600'>Sign Up</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;