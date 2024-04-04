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
          <div className="z-0 flex flex-col justify-center h-full px-8 md:px-20 lg:px-32 lg:w-1/2">
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
      <section id="partners" className="p-8 bg-black" style={{height: "300px"}}>
        <h2 className="text-2xl font-bold text-center mb-4" style={{textAlign:"left"}}>Our Partners</h2>
        {/* Partners content */}
      </section>
      
      {/* About Section */}
      <section id="about" className="p-8" style={{ height: "auto", maxWidth: "600px", margin: "0 auto" }}>
        <h2 className="text-2xl font-bold text-center mb-4">About OrderEazy</h2>
        {/* About content */}
        <p style={{textAlign: "center" , fontFamily:"'Roboto',sans-serif"}} >We are a dedicated group of students on a mission to revolutionize the food ordering experience for customers, whether they're dining in or ordering out. Fueled by a passion for innovation and a commitment to enhancing customer satisfaction, we've come together to challenge the status quo and introduce exciting new solutions to the realm of food service. With a blend of creativity, technical expertise, and a deep understanding of consumer needs, we're determined to make a meaningful impact in the way people interact with food establishments.</p>
      </section>
      
      {/* Contact Section */}
      <footer className="bg-black text-white py-8">
  <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
    {/* Column 1 - Brand Name */}
    <div className="flex flex-col mb-6">
      <span className="font-bold text-lg mb-4">OrderEazy</span>
      <nav className="flex flex-col">
        <a href="/" className="text-yellow-500 hover:text-yellow-600 mb-2">Home</a>
        <a href="/about" className="text-yellow-500 hover:text-yellow-600">About</a>
        {/* Add more links as needed */}
      </nav>
    </div>

    {/* Column 2 - Contact */}
    <div className="flex flex-col mb-6">
      <span className="font-bold text-lg mb-4">Contact</span>
      <a href="mailto:example@example.com" className="text-yellow-500 hover:text-yellow-600 mb-2">Email</a>
      <a href="/linkedin" className="text-yellow-500 hover:text-yellow-600">LinkedIn</a>
      {/* Add more links as needed */}
    </div>

    {/* Column 3 - Newsletter */}
    <div className="flex flex-col">
      <span className="font-bold text-lg mb-4">Join our newsletter</span>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Email Address"
          className="mb-4 p-2 text-black"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</footer>

    </div>
  );
}

export default HomePage;
