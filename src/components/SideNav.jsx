import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSeedling, FaCalendarAlt, FaHome, FaBars, FaUser } from "react-icons/fa";
import { Menu } from 'lucide-react';
import UserContext from '../Context/UserContext';

function SideNav() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user } = useContext(UserContext)
    const navItems = [
        { icon: FaHome, text: 'Dashboard', path: '/dashboard/activities' },
        { icon: FaSeedling, text: 'Calendar', path: '/dashboard/calendar' }
    ]

    const handleLogout = (e) => {
        logout();
        navigate("/login");
    };

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 md:hidden bg-custom-blue text-white p-2 rounded-full"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Menu className="h-6 w-6" />
            </button>
            {/* Side Navigation */}
            {/* Mini Navbar */}
            <div className="fixed top-0 left-0 w-full p-4 bg-white flex justify-between items-center z-20 shadow-lg">
                <Link to="/">
                    <h1 className="text-lg font-bold">Farmmall Dashboard</h1>
                </Link>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <span className="font-medium">Hi, {user.username}</span>
                        </>
                    ) : (
                        <p>Please log in</p>
                    )}
                </div>
            </div>
            <div
                className={`w-64 bg-custom-green text-white flex flex-col p-4 top-0 fixed h-full z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 mt-14`}
            >
                <nav className="space-y-2">
                    {navItems.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className="flex items-center gap-3 w-full p-3 text-gray-700 hover:bg-indigo-50 hover:text-custom-blue rounded-lg"
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.text}</span>
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="px-3 py-2 bg-red-600 w-full text-white rounded-3xl text-sm hover:bg-red-800 transition-colors duration-200"
                    >
                        Logout
                    </button>
                </nav>
            </div>

        </>
    )
}

export default SideNav
