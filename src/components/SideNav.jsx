import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSeedling, FaCalendarAlt, FaHome, FaBars, FaUser , Menu} from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";


function SideNav() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { icon: Home, text: 'Dashboard', path: '/dashboard/home' },
    ]

    
    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 md:hidden bg-custom-blue text-white p-2 rounded-full"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Menu className="h-6 w-6" />
            </button>
            {/* Side Navigation */}
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
