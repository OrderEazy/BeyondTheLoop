import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './context/MenuContext';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import Layout from './components/Layout';
import DashboardLayout from './components/DashboardLayout';
import OverviewPage from './pages/OverviewPage';
import OrdersPage from './pages/OrdersPage';
import MenuPage from './pages/MenuPage';
import View from './pages/View';
import Add from './pages/Add';
import Edit from './pages/Edit';
import CustomersPage from './pages/CustomersPage';

function App() {
  return (
    <MenuProvider> {/* Wrapping everything with MenuProvider */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Dashboard Layout and nested routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<OverviewPage />} />
              <Route path="overview" element={<OverviewPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="menu/view" element={<View />} />
              <Route path="menu/add" element={<Add />} />
              <Route path="menu/edit" element={<Edit />} />
              <Route path="customers" element={<CustomersPage />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </MenuProvider>
  );
}

export default App;
