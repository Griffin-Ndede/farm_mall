import {  Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import SideNav from "../Components/SideNav";

function Dashboard() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div className="flex h-fit">
        <SideNav/>
        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-8 bg-gray-100">
          {/* Outlet for nested routes */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;