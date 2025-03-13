import React from 'react'

function SideNav() {
  return (
    <>
              {/* Side Navigation */}
              <div
          className={`w-64 bg-custom-green text-white flex flex-col p-4 top-0 fixed h-full z-10 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 mt-14`}
        >
          <nav className="space-y-4 p-4">
            <Link
              to="/"
              className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200"
            >
              <FaHome className="text-green-600 group-hover:text-green-800" />
              <span className="text-white group-hover:text-green-800">Home</span>
            </Link>

            <AnchorLink href="#activity">
              <button className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200">
                <FaSeedling className="text-green-600 group-hover:text-green-800" />
                <span className="text-white group-hover:text-green-800">Add Activity</span>
              </button>
            </AnchorLink>

            <AnchorLink
              href="#calendar"
              className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200"
            >
              <FaCalendarAlt className="text-green-600 group-hover:text-green-800" />
              <span className="text-white group-hover:text-green-800">Calendar</span>
            </AnchorLink>
            <AnchorLink
              href="#user">
              <button className="group flex items-center space-x-4 px-4 py-2 rounded-md hover:bg-green-100 transition duration-200">
                <FaUser className="text-green-600 group-hover:text-green-800" />
                <span className="text-white group-hover:text-green-800">User Profile</span>
              </button>
            </AnchorLink>

          </nav>
        </div>

    </>
  )
}

export default SideNav
