import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// components
import Website from './pages/Website';
import Landing from './pages/Landing';
import Category from './pages/Category';
import SinglePage from './pages/SinglePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ConsultantsPersonal from './pages/ConsultantsPersonal';
import Consultants from './pages/Consultants';
import LoadingOverlay from './template/LoadingOverlay';

const App = () => {
  let [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {Loading && <LoadingOverlay />}
      <Routes>
        <Route path="/" element={<Website />}>
          <Route path="/" element={<Landing />} />
          <Route path="/category" element={<Category />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route
            path="/consultantsPersonal/:id"
            element={<ConsultantsPersonal />}
          />
          <Route path="/category/:id" element={<SinglePage />} />
          <Route path="/*" element={<Navigate to={'/'} />} /> 
        </Route>
      </Routes>
    </>
  );
};

export default App;
