import React from 'react';
import tophero from '../Asstes/tophero.jpg';

const Landing = () => {
    return (
        <div className="flex items-center justify-between p-10 bg-white">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Landing Page</h1>
                <p className="text-lg mb-6 text-gray-700">
                    This is a brief description of what we offer. Our services are designed to help you achieve your goals and enhance your experience.
                </p>
                <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 drop-shadow-xl">
                    Get Started
                </button>
            </div>
            <div className="w-1/2">
                <img src={tophero} alt="Landing Visual" className="w-full h-auto rounded-md drop-shadow-xl" />
            </div>
        </div>
    );
};

export default Landing;