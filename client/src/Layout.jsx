import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import FloatingSocialLink from './components/FloatingSocialLink/FloatingSocialLink';
import MobileBottomMenu from './components/Header/MobileBottomMenu/MobileBottomMenu';
import usePageTracking from './hooks/usePageTracking';

function Layout() {
  const location = useLocation();

  usePageTracking(location); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop(); // Scroll to top on route change
  }, [location]);

  return (
    <>
      <Header onLogoClick={scrollToTop} />
      <Outlet />
      <FloatingSocialLink/>
      <MobileBottomMenu/>
      <Footer />
    </>
  );
}

export default Layout;
