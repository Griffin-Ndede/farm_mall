import React, { useState } from 'react';
import FarmDetailsForm from './FarmDetailsForm';
import DashboardNav from './DashboardNav';
import FarmManagement from './FarmManagement';
import Projections from './Projections';

function Dashboard() {
  // State to manage which component to display
  const [activeComponent, setActiveComponent] = useState('FarmDetailsForm');

  // Function to switch components
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'FarmDetailsForm':
        return <FarmDetailsForm />;
      case 'FarmManagement':
        return <FarmManagement />;
      case "Projections":
        return <Projections/>;
      default:
        return <FarmDetailsForm />;
    }
  };

  return (
    <div className="antialiased  w-full min-h-screen text-slate-300 relative ">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <div className="col-span-3">
          <DashboardNav setActiveComponent={setActiveComponent} />
        </div>
        <div id="content" className="bg-white/10 col-span-9 rounded-lg ">
          {/* Render the active component */}
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
