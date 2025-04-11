"use client"
import { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);
  
  // Handle hydration mismatch by only rendering interactive elements client-side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, redirect to search results page
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };
  
  const goBack = () => {
    window.history.back();
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header with high contrast */}
      <header className="w-full bg-blue-700 text-white p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Your Company</div>
          <nav>
            <button 
              onClick={goBack}
              className="flex items-center bg-white text-blue-700 px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </button>
          </nav>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Error status with decorative elements */}
          <div className="flex justify-center items-center mb-6">
            <div className="bg-gray-200 text-gray-800 text-6xl font-bold p-4 rounded-lg">
              404
            </div>
          </div>
          
          {/* Clear message */}
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Page Not Found</h1>
          <p className="text-lg mb-8 text-gray-600">
            We couldn&apos;t find the page you were looking for. It might have been moved or deleted.
          </p>
          
          {/* Search functionality */}
          {isClient && (
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex w-full max-w-md mx-auto">
                <label htmlFor="search-input" className="sr-only">Search</label>
                <input
                  id="search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our site..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Search"
                />
                <button 
                  type="submit"
                  className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Submit search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}
          
          {/* Navigation options with clear visual distinction */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/"
              className="flex items-center justify-center bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Go to homepage"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Contact support"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full bg-gray-100 border-t border-gray-200 p-4 mt-auto">
        <div className="max-w-5xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}