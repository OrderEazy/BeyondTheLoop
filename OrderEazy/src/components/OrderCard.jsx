import React, { useState } from 'react';

const OrderCard = ({ order, orderId }) => {
  const [isCompleted, setIsCompleted] = useState(order.completed || false); // Assuming `order.completed` is a boolean indicating completion status

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    // Optionally, send this change to your backend here if the order completion status needs to be persisted
  };

  console.log(orderId);
  return (
    <div className="border p-4 rounded-md shadow">
      <h2 className="text-xl font-semibold mb-2">Order # {orderId}</h2>
      {order.items.map((item, index) => (
        <div key={index} className="mb-2">
          <p>{item.item}: {item.quantity} x ${item.price.toFixed(2)}</p>
        </div>
      ))}
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-green-600" // TailwindCSS classes for styling
        />
        <span className="ml-2 text-sm text-gray-700">Order Completed</span>
      </div>
      <p className="font-bold">Total: ${order.total.toFixed(2)}</p>
    </div>
  );
};

export default OrderCard;