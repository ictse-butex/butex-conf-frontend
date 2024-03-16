import React from 'react';
import TimeLine from './LandingPage/TimeLine';
import HeroSection from './LandingPage/HeroSection';
import NavBar from './LandingPage/NavBar';
import Features from './LandingPage/Features';
import Features2 from './LandingPage/Features2';
import { Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <HeroSection />
      <Features/>
      <Features2/>
      {/* <CarouselSection/> */}
      <TimeLine />
    </div>

  );
};

export default Sidebar;