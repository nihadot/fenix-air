import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css';
import { ThreeDots } from 'react-loader-spinner';

const Root = () => {
  const [loading, setLoading] = useState(true); // Initial loading state

  useEffect(() => {
    // Simulate an asynchronous action (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after data fetch completes
    }, 2000); // Replace with actual data fetching logic
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <React.StrictMode>
      {loading ? (
        <div className="loader min-h-screen w-full flex justify-center items-center ">
          <ThreeDots
            visible={true}
            height={80}
            width={80}
            color="#D79B2A"
            radius={9}
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
