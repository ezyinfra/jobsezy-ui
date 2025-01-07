'use client'

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaBriefcase, FaPlusSquare, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-slate-700 via-slate-900 to-slate-600 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-bold text-2xl">
                    <Link href="/">
                        Jobs<span className="text-orange-500 font-extrabold">Ezy</span>
                    </Link>
                </div>

                {/* Toggle button */}
                <button onClick={toggleMenu} className="lg:hidden text-white hover:text-orange-500 transition">
                    {isMobileMenuOpen ? <FaTimes size={24} /> : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    )}
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 font-semibold text-lg items-center">
                    <Link href="/" className="hover:text-orange-500 transition border-b-2 border-transparent hover:border-orange-500 pb-1">
                        <FaHome className="inline-block mr-2" /> Home
                    </Link>
                    <Link href="/jobs" className="hover:text-orange-500 transition border-b-2 border-transparent hover:border-orange-500 pb-1">
                        <FaBriefcase className="inline-block mr-2" /> Jobs
                    </Link>
                    <Link href="/createJobs" className="hover:text-orange-500 transition border-b-2 border-transparent hover:border-orange-500 pb-1">
                        <FaPlusSquare className="inline-block mr-2" /> Create Jobs
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden mt-4 p-4 bg-slate-700 rounded-lg shadow-md divide-y divide-slate-600">
                    <div className="py-2">
                        <Link href="/" className="block hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>
                            <FaHome className="inline-block mr-2" /> Home
                        </Link>
                    </div>
                    <div className="py-2">
                        <Link href="/jobs" className="block hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>
                            <FaBriefcase className="inline-block mr-2" /> Jobs
                        </Link>
                    </div>
                    <div className="py-2">
                        <Link href="/createJobs" className="block hover:text-orange-500 transition" onClick={() => setIsMobileMenuOpen(false)}>
                            <FaPlusSquare className="inline-block mr-2" /> Create Jobs
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
