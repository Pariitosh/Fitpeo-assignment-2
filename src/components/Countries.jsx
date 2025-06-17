import '../styles/Supporters.css'
import { countries } from '../lists/supporters'
import React, { useRef, useState,useEffect } from 'react'
export default function Countries() {
const [count, setCount] = useState(300);
const wrapperRef = useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            startCounting();
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0 }
            );
    
            if (wrapperRef.current) {
                observer.observe(wrapperRef.current);
            }
    
            return () => {
                if (wrapperRef.current) {
                    observer.unobserve(wrapperRef.current);
                }
            };
        }, []);
    const startCounting = () => {
    const duration = 1500; // 2 seconds
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = Math.floor(661 * progress);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };
    return (
        <div className='supporters-wrapper countries' >
            <h1>#{count}</h1>
            <div className='sup-tag'>
                <h2>Global Supporters</h2>

            </div>

            <div className='countries-grid' ref={wrapperRef}>
                {countries.map((country, index) => (
                    <React.Fragment key={index}>
                    <p className='cname'>{country.country}</p>
                    {country.names.map((name,idx)=>{
                        return( 
                        <div key={idx} className='cg-inner'>
                            <p style={{marginBottom:idx==0?'10px':'0px'}}  >{name}</p>
                        </div>
                        )
                    })}
                    </React.Fragment>
                ))}


            </div>
        </div >


    )
}