import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSeedling, FaCalendarAlt, FaHome, FaUser, FaEnvelope, FaClipboard } from "react-icons/fa";
import { Menu } from "lucide-react";
import UserContext from "../Context/UserContext";

function SideNav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const navItems = [
        { icon: FaHome, text: "Dashboard", path: "/dashboard/activities" },
        { icon: FaCalendarAlt, text: "Calendar", path: "/dashboard/calendar" },
        { icon: FaUser, text: "User Profile", path: "/dashboard/userprofile" },
        // { icon: FaClipboard, text: "Practice page", path: '/dashboard/practice'}
    ];

    const handleLogout = (e) => {
        logout();
        navigate("/login");
    };

    return (
        <>
            {/* Toggle Button for Mobile */}
            <button
                className="fixed top-4 left-4 z-50 md:hidden bg-custom-blue p-2 rounded-full"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Side Navigation */}
            <div
                className={`w-64 flex flex-col p-4 top-0 fixed h-full z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 border-r border-gray-200`}
            >
                {/* Navbar Integrated into Sidebar */}
                <div>
                    <Link to="/" className="text-lg font-bold">
                        Farmmall Dashboard
                    </Link>
                </div>

                {/* User Information */}
                <div className="flex flex-col mb-6">
                    {user && (
                        <>
                            <div className="flex items-center gap-2">
                                <FaUser className="h-5 w-5" />
                                <span className="font-medium text-lg">Hi, {user.username}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-400">{user.email}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2 flex-1">
                    {navItems.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className="flex items-center gap-3 w-full p-3 hover:bg-custom-green hover:text-white rounded-3xl transition-colors duration-200"
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.text}</span>
                        </Link>
                    ))}
                </nav>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="px-3 py-2 bg-red-600 w-full text-white rounded-3xl text-sm hover:bg-red-800 transition-colors duration-200"
                >
                    Logout
                </button>
            </div>
        </>
    );
}

export default SideNav;