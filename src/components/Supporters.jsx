import '../styles/Supporters.css'
import { useEffect, useRef, useState } from 'react';
import { names } from '../lists/supporters'
export default function Supporters() {
    const [count, setCount] = useState(200);
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
                { threshold: 0.2 }
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
      
      const currentValue = Math.floor(513 * progress);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };
    return (
        <div className='supporters-wrapper' ref={wrapperRef}>
            <h1>#{count}</h1>
            <div className='sup-tag'>
                <h2>Signatories and counting in</h2>
                <p className='tag orange'>D! UK</p>
            </div>

            <div className='supporters-grid'>
                {names.map((name,idx) => {
                    return (
                    <p className = 'supporter' key={idx} > {name}</p>
                )})}


        </div>
        </div >


    )
}