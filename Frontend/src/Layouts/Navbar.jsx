import React, { useState } from "react";
import Alphericlogo from "../assets/Homepage/alpheric-icon.png";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between font-urbanist px-3 sm:px-6 lg:px-20 py-4 bg-transparent backdrop-blur-md z-50">
            {/* Logo */}
            <div className="relative ml-0">
                <img 
                    src={Alphericlogo} 
                    alt="company logo" 
                    className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px] md:w-[160px] md:h-[50px]" 
                />
            </div>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 border border-white rounded-full px-4 py-2 text-base backdrop-blur-lg mx-4  ">
                <a className="flex justify-center items-center gap-1" href="#">Consult <ChevronDown size={15} /></a>
                <a href="#about">Build</a>
                <a href="#design">Design</a>
                <a href="#host">Host</a>
                <a href="#secure">Secure</a>
                <a href="#market">Market</a>
                <a href="#support">Support</a>
                <a href="#services" className="flex justify-center items-center gap-1">Services <ChevronDown size={15} /></a>
                <a href="#hire" className="flex justify-center items-center gp-1">Hire <ChevronDown size={15} /></a>
                <a href="#joinus">Join Us</a>
                <a href="#action">Action</a>
                <a href="#insights">Insights</a>
            </div>
            {/* Desktop Sign-Up Button */}
            <button className="hidden lg:block px-4 py-2 text-base rounded-full bg-white text-black hover:bg-[#56c8dc]">
                Sign Up
            </button>

            {/* Mobile & Tablet Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden p-2 text-white focus:outline-none">
                { isMenuOpen ? <X size={30} /> : <Menu size={30} color="black" /> }
            </button>

            {/* Mobile & Tablet Menu */}
            <div className={`fixed gap-8 top-0 right-0 w-4/5 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 p-10 ${ isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
                <button onClick={toggleMenu} className="absolute top-5 right-5">
                    <X size={30} />
                </button>

                <div className="flex flex-col items-start gap-6 mt-16 text-lg">
                    <a href="#" onClick={toggleMenu}>Consult</a>
                    <a href="#about" onClick={toggleMenu}>Build</a>
                    <a href="#design" onClick={toggleMenu}>Design</a>
                    <a href="#host" onClick={toggleMenu}>Host</a>
                    <a href="#secure" onClick={toggleMenu}>Secure</a>
                    <a href="#market" onClick={toggleMenu}>Market</a>
                    <a href="#support" onClick={toggleMenu}>Support</a>
                    <a href="#services" onClick={toggleMenu}>Services</a>
                    <a href="#hire" onClick={toggleMenu}>Hire</a>
                    <a href="#joinus" onClick={toggleMenu}>Join Us</a>
                    <a href="#action" onClick={toggleMenu}>Action</a>
                    <a href="#insights" onClick={toggleMenu}>Insights</a>
                    <button className="w-full mt-6 px-6 py-3 text-lg rounded-full bg-white text-black hover:bg-[#56c8dc]">
                        Sign Up
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
