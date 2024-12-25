import React from 'react';
import './Navbar.css';
import { Button } from "antd";
import { useNavigate } from 'react-router-dom'; 

function Navbar() {
    const navigate = useNavigate(); 

    // Handle login click
    const handleLogin = () => {
        navigate('/login'); 
    };

    return (
        <div className="p-1 flex bg-[#d7c3a3] justify-between items-center">
            <a href="/" id="brand" className="flex gap-2 items-center">
                <img className="object-cover max-w-16 max-h-16" src="../src/assets/img-1.png" alt="logo" />
                <div className="text-2xl font-medium"><span className=''>R</span>eclaimSpace</div>
            </a>

            <div id="nav-menu" className="flex gap-12">
            </div>
            <div className='m-2'>
            <Button type="primary" onClick={handleLogin}>Login</Button>

            </div>
           
        </div>
    );
}

export default Navbar;
