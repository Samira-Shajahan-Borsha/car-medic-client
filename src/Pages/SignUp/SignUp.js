import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg';

const SignUp = () => {
    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className="hero w-full my-11">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2  rounded-xl">
                    <h1 className="text-3xl font-bold text-center mt-16">Sign Up</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-0 normal-case bg-orange-600 hover:bg-orange-600" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center mb-16 text-lg font-semibold'>Already have an account? <Link to='/login'><span className='text-orange-600'>Log In</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;