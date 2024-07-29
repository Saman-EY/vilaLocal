import React, { useState, useEffect } from 'react';
import BigVilaSilder from '../template/BigVilaSilder';

// components
import LandingSec1 from '../template/LandingSec1';
import LandingSec2 from '../template/LandingSec2';
import LandingSec3 from '../template/LandingSec3';
import LoadingOverlay from '../template/LoadingOverlay';
import NewVilaSlider from '../template/NewVilaSlider';
import ConsultantsSlider from '../template/ConsultantsSlider';

const Landing = () => {
  return (
    <>
      <LandingSec1  />
      <LandingSec2 />
      <LandingSec3 />
      <NewVilaSlider  />
      <BigVilaSilder />
      <ConsultantsSlider />
    </>
  );
};

export default Landing;
