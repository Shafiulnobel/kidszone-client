import React, { useEffect, useState } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { RingLoader } from 'react-spinners';
import './Main.css'
const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading && (
        <div className="loading-overlay">
          <RingLoader color="#36d7b7" size={200} />
        </div>
      )}

      <div className={loading ? 'content-wrapper blur' : 'content-wrapper'}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
