import '../styles/Donate.css'
import { useEffect, useRef } from 'react';
export default function Donate(){
    const wrapperRef = useRef(null);
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
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
    return(
        <div className="sec-3 " ref={wrapperRef}>
           <div className="sec-3-left">
                <p>Donate to D!</p>
            </div>
            <div className="sec-3-right">
                <p>
                   Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our 
                   passionate community working towards change in the creative industry. Your support can go a long way, and 
                   helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, 
                   please consider a small donation to help us on our journey for a more equitable and just planet.
                </p>

                <div className='sec-3-btns'>
                    <button className='btn'>Donate £10</button>
                    <button className='btn'>Donate £20</button>
                    <button className='btn'>Donate £50</button>
                </div>

                
            </div>
        </div>
    )
}