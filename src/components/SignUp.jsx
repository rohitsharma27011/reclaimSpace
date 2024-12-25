import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/70 z-[10000]">
            <Link to="/">
                <label
                    htmlFor=""
                    className="absolute top-8 right-16 text-5xl text-white hover:text-orange-500 cursor-pointer"
                >
                    ✕
                </label>
            </Link>
            <form className="border border-gray-300 bg-white rounded-lg p-8 w-full max-w-xl">
                <h2 className="text-3xl text-center text-orange-500 mb-6">SIGNUP</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 text-lg text-gray-800 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-orange-300"
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 text-lg text-gray-800 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-orange-300"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 text-lg text-gray-800 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-orange-300"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="w-full py-3 text-xl text-white bg-orange-400 border border-orange-500 rounded-lg cursor-pointer hover:bg-orange-300 hover:text-gray-800"
                />
                <div className="flex items-center mb-4">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-lg">
                        Remember Me
                    </label>
                </div>
                <p className="text-lg">
                    Forgot password? <a href="#" className="text-orange-500 hover:underline">Click here</a>
                </p>
                <p className="text-lg">
                    Already have an account?{' '}
                    <Link to='/login'>
                    <a href="#" className="text-orange-500 hover:underline">
                        Sign in
                    </a>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
