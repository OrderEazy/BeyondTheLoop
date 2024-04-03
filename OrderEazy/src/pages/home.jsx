import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg1 from '.././assets/bg1.png'; // Make sure this is the correct path to your image

function HomePage() {
  let navigate = useNavigate(); // Hook for navigation

  // Function to navigate to the login page
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col bg-black text-white">
      {/* Home Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex justify-center items-center relative"
      >
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-start">
          {/* Content */}
          <div className="z-10 flex flex-col justify-center h-full px-8 md:px-20 lg:px-32 lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="font-bold leading-none">
                <span className="text-5xl md:text-7xl text-white">HEY</span><br />
                <span className="text-5xl md:text-7xl text-yellow-500">FOODIE!</span>
              </h1>
              <p className="text-xl md:text-2xl mt-4 mb-8">
                Ordering made easier, quicker, and more efficient.
              </p>
              <div className="flex flex-col">
                <button 
                  onClick={goToLogin}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-full font-bold shadow-lg mb-4 hover:bg-yellow-600 transition-colors"
                >
                  CREATE FREE ACCOUNT
                </button>
                <button 
                  onClick={goToLogin}
                  className="bg-transparent text-yellow-500 border border-yellow-500 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500 hover:text-white transition-colors"
                >
                  LOG IN
                </button>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 hidden lg:block">
            <img src={bg1} alt="Delicious food" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section id="partners" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Our Partners</h2>
        {/* Partners content */}
      </section>
      
      {/* About Section */}
      <section id="about" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-4">About OrderEazy</h2>
        {/* About content */}
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        {/* Contact form */}
      </section>
    </div>
  );
}

export default HomePage;
