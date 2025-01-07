import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-16">
      {/* Main Container */}
      <div className="bg-slate-100 rounded-xl shadow-lg p-8 w-full max-w-3xl text-center">
        {/* JobMatrix Title */}
        <h1 className="text-4xl font-bold text-slate-600 mb-4">
          Welcome to Jobs<span className="text-orange-600">Ezy</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-400 mb-6">
          JobsEzy is the future of job seeking. Our AI-powered platform helps you find jobs that match your skills and aspirations with just a few clicks. We connect talent with opportunity in the most seamless way possible, empowering you to take the next step in your career.
        </p>

        {/* "Look for Jobs" Button */}
        <Link href="/jobs">  
            <button className="bg-orange-500 text-white py-2 px-6 rounded-lg text-xl transition-all font-mono font-semibold hover:bg-orange-600 focus:outline-none">
              Look for Jobs
            </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
