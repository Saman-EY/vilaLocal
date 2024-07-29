import React, { useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Website = () => {

  useEffect(() => {
    document.title = "AliGhomi";
  }, []);

  return (
    <div className="bg-Semiblack">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Website;
