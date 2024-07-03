import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './index.css';
import { ThreeDots } from 'react-loader-spinner';
import LandingPage from "./components/LandingPage"
import Charters from "./components/Charters"
import Svg from './components/Svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/svg" element={<Svg />} />
            <Route path="/cargo" element={<Charters />} />
            <Route path="/airtaxi" element={<Charters />} />
            <Route path="/airambulance" element={<Charters />} />
            <Route path="/flight-school" element={<Charters />} />
            <Route path="/helicopter" element={<Charters />} />
            
          </Routes>
        </BrowserRouter>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
