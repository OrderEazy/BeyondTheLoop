// OrdersPage.jsx
import React, { useState, useEffect } from 'react';
import OrderCard from '.././components/OrderCard';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  // Function to fetch current list of orders from the server
  const fetchOrders = async () => {
      try {
          const response = await fetch('http://localhost:3000/orders'); // Adjust the port and path as necessary
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setOrders(data); // Update state with fetched orders
      } catch (error) {
          console.error("Failed to fetch orders:", error);
      }
  };

  useEffect(() => {
      const ws = new WebSocket('ws://localhost:8080');

      ws.onopen = () => {
          console.log("Connected to WebSocket");
      };

      ws.onmessage = (event) => {
          const message = JSON.parse(event.data);
          if (message.type === 'order-update') {
              fetchOrders(); // Refetch orders on any update
          }
      };

      fetchOrders(); // Fetch orders on component mount

      return () => {
          ws.close();
      };
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Current Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order,index) => (
          
          <OrderCard key={index} order={order} orderId={index.toString()} />
          
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
