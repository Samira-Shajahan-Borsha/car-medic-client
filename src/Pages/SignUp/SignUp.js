import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { setAuthToken } from '../../api/auth';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    useTitle('Sign Up');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                setAuthToken(user);
                form.reset();
            })
            .catch(error => console.error(error));

    }

    return (
        <div className="hero w-full my-11">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2  rounded-xl py-12 pt-0">
                    <h1 className="text-3xl font-bold text-center mt-16">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold"> Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" className="btn border-0 normal-case bg-orange-600 hover:bg-orange-600" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-lg font-medium my-2 text-center'><small>Or Sign Up with</small></p>
                    <SocialLogin></SocialLogin>
                    <p className='text-center mb-2 text-lg font-semibold'>Already have an account? <Link to='/login'><span className='text-orange-600'>Log In</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;