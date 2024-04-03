import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function Layout({ children }) {
  let location = useLocation(); // Hook to get location information

  // Function to determine if the navigation bar should be displayed
  const showNavigationBar = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {showNavigationBar && <NavigationBar />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
