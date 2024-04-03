import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false); // State to manage dropdown visibility

  // Function to determine the style of each NavLink
  const getNavLinkClass = ({ isActive }) => {
    return `block text-lg px-4 py-3 rounded hover:bg-tangerine ${
      isActive ? 'bg-mid text-white' : 'text-tangerine'
    }`;
  };

  // Toggle dropdown visibility
  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
  };

  return (
    <div className="flex flex-col w-64 bg-black text-white h-full">
      <div className="flex flex-col justify-between h-full">
        <div>
        <div className="px-6 py-4">
  <span className="text-2xl font-bold text-white">Order</span>
  <span className="text-2xl font-bold" style={{ color: '#ffcc00' }}>Eazy</span>
</div>

          <nav className="mt-10">
            <NavLink to="/dashboard/overview" className={getNavLinkClass} style={{ color: 'white' }}>Overview</NavLink>
            <NavLink to="/dashboard/orders" className={getNavLinkClass} style={{ color: 'white' }}>Orders</NavLink>
            <div>
              {/* Modified Menu NavLink to a div for click handling */}
              <div
                onClick={toggleMenuDropdown}
                className={getNavLinkClass({ isActive: false }).replace('block', '') + ' cursor-pointer'} style={{ color: 'white' }}
              >
                Menu
              </div>
              {/* Conditional rendering for Dropdown */}
              {isMenuDropdownOpen && (
                <div className="pl-4">
                  <NavLink to="/dashboard/menu/View" className={getNavLinkClass} style={{ color: 'white' }}>View</NavLink>
                  <NavLink to="/dashboard/menu/Add" className={getNavLinkClass} style={{ color: 'white' }}>Add</NavLink>
                  <NavLink to="/dashboard/menu/Edit" className={getNavLinkClass} style={{ color: 'white' }}>Edit</NavLink>
                  {/* Add more dropdown items here */}
                </div>
              )}
            </div>
            <NavLink to="/dashboard/customers" className={getNavLinkClass} style={{ color: 'white' }}>Customers</NavLink>
            {/* More nav items */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
