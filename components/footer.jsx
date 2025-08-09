import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  FinLense
                </h3>
                <p className="text-sm text-gray-400">Smart Finance Vision</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Democratizing personal finance management through AI-powered insights, 
              automated transaction processing, and intelligent budgeting.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Transactions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Budget Manager</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Analytics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">AI Insights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white focus:outline-none focus:underline transition-colors duration-200">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
              <span>© 2025 FinLense</span>
              <span className="hidden md:inline">•</span>
              <span className="text-gray-300">All rights reserved</span>
            </div>
            
            {/* Made by Section */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-400">Made with</span>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-400">by</span>
              <div className="flex items-center space-x-2">
                <a 
                  href="#" 
                  className="text-white hover:underline focus:outline-none focus:underline transition-colors duration-200 font-medium"
                >
                  Vivek
                </a>
                <span className="text-gray-500">&</span>
                <a 
                  href="#" 
                  className="text-white hover:underline focus:outline-none focus:underline transition-colors duration-200 font-medium"
                >
                  Swaraj
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
