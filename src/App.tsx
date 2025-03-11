import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header/Navigation */}
        <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">GridFiable</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/#features" className="text-gray-600 hover:text-blue-600">Features</Link>
                <Link to="/#how-it-works" className="text-gray-600 hover:text-blue-600">How it Works</Link>
                <Link to="/#dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link>
              </div>
              <Link 
                to="/dashboard" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <div className="text-sm text-center">
                <p>© 2025 GridFiable. All rights reserved. Created by Aouf Nihed</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;