import React from 'react';

import './styles.css'; // Import the CSS file

const Homepage = () => {

  return (

    <div className="bg-gradient-to-r from-purple-500 to-blue-500">

      <div className="container mx-auto py-8">

        <h1 className="text-4xl font-bold text-white mb-8">Welcome to our Gaming World</h1>

        <div className="grid">

          {/* Game Pictures */}

          <div className="col-span-1">

            <img src="game1.jpg" alt="Game 1" className="w-full" />

          </div>

          <div className="col-span-1">

            <img src="game2.jpg" alt="Game 2" className="w-full" />

          </div>

          <div className="col-span-1">

            <img src="game3.jpg" alt="Game 3" className="w-full" />

          </div>

          <div className="col-span-1">

            <img src="game4.jpg" alt="Game 4" className="w-full" />

          </div>

          <div className="col-span-1">

            <img src="game5.jpg" alt="Game 5" className="w-full" />

          </div>

          <div className="col-span-1">

            <img src="game6.jpg" alt="Game 6" className="w-full" />

          </div>

        </div>

        {/* Contact Details */}

        <div className="contact-details mt-8">

          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>

          <p className="text-white">Phone: 123-456-7890</p>

          <p className="text-white">Email: info@example.com</p>

        </div>

        {/* Services */}

        <div className="services mt-8">

          <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>

          <ul className="text-white">

            <li>Game development</li>

            <li>Game design</li>

            <li>Game testing</li>

            <li>Game optimization</li>

          </ul>

        </div>

      </div>

    </div>

  );

}

export default Homepage;


