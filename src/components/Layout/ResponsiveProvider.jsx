import React, { createContext, useState, useEffect, useContext } from 'react';

const ResponsiveContext = createContext({
  isMobile: false,
  globalWidth: 0,
});

const ResponsiveProvider = ({ children, mobileBreakpoint = 768 }) => {
  const [globalWidth, setGlobalWidth] = useState(window.innerWidth);
  const isMobile = globalWidth <= mobileBreakpoint;

  useEffect(() => {
    const handleResize = () => {
      setGlobalWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const responsiveValues = {
    isMobile,
    globalWidth,
  };
  return (
    <ResponsiveContext.Provider value={responsiveValues}>
      {children}
    </ResponsiveContext.Provider>
  );
};

const useResponsive = () => {
  return useContext(ResponsiveContext);
};

export { ResponsiveProvider, useResponsive, ResponsiveContext };