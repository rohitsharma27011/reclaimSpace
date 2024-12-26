import React from 'react';
import './Navbar.css';
import { Button, Avatar, Space } from "antd";
import { useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    // Handle login click
    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div
            className="p-4 flex justify-between items-center bg-gradient-to-r from-[#d7c3a3] via-white to-[#d7c3a3] shadow-md">
            {/* Brand Section */}
            <a href="/" id="brand" className="flex gap-3 items-center">
                <img
                    className="object-cover w-12 h-12 rounded-full shadow-sm"
                    src="../src/assets/img-1.png"
                    alt="logo"
                />
                <div className="text-2xl font-semibold text-gray-800">
                    <span className="text-[#5a3e2f]">R</span>eclaimSpace
                </div>
            </a>

            {/* Navigation Menu */}
            <div id="nav-menu" className="flex gap-8 text-lg font-medium text-gray-700">
                {/* Add navigation links here if needed */}
            </div>

            {/* Profile and Login Section */}
            <div className="flex gap-4 items-center">
                <Link to="/profile">
                    <Avatar
                        size={40}
                        icon={<UserOutlined />}
                        className="border-2 border-blue-500 shadow-sm"
                    />
                </Link>
                <Button
                    type="primary"
                    onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-600 border-none shadow-md"
                >
                    Login
                </Button>
            </div>
        </div>

    );
}

export default Navbar;
