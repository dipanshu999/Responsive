import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive Scroll CSS

const ScrollComponent = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default ScrollComponent;
