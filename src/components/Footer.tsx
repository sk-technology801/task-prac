import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-3">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-200">
              MyApp
            </Link>
            <p className="text-gray-300 mt-2 text-sm max-w-md">
              Building amazing experiences with modern technology and passionate development.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="text-white" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
        </div>

      
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} MyApp. All rights reserved.
            </p>
            
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer