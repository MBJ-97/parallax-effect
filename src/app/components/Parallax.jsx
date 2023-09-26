'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollItem from './ScrollItem';

export default function Parallax() {
    const items =[0,1,2];
    const [scrollY, setScrollY] = useState(0);
    const sectionRefs = [useRef(), useRef(), useRef()]; // Refs for the sections  
    
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    // Function to get the scroll thresholds based on section heights
    const getScrollThresholds = () => {
      const thresholds = sectionRefs.map((ref) => {
        if (ref.current) {
          return ref.current.offsetTop - window.innerHeight;
        }
        return 0;
      });
      return thresholds;
    };
  
    const scrollThresholds = getScrollThresholds();
    
  // Function to calculate opacity based on scroll position
  const calculateOpacity = (index) => {
    //! should add a case where the very first element starts with 1

    if (scrollY >= scrollThresholds[index] && scrollY < scrollThresholds[index + 1]) {
      return 0;
    } else if (scrollY >= scrollThresholds[index + 1]) {
      return 1 - (scrollY - scrollThresholds[index + 1]) * 0.0014;
    } else {
      return 1;
    }
  };


  return (
    <div>
        {items.map((i)=>(
            <div className="1 w-full h-screen sticky top-0 inline-block"
            ref={sectionRefs[i]}>
                <motion.div
                className="fade-out-element transition ease-in duration-100"
                style={{ opacity: calculateOpacity(i) }}
                >
                    <ScrollItem key={i} num={i}/>
                </motion.div>  
            </div>
        ))}
    </div>
  )
}
