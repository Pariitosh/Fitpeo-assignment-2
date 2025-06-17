import '../styles/Latest.css'
import { useEffect, useRef } from 'react';
export default function Latest() {
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
    return (
        <div className="sec-6" ref={wrapperRef}>
            <div className="sec-6-left">
                <p>Latest</p>
            </div>
            <div className="sec-6-right">

                <div className='sec-6-tags'>
                    <p className='tag'>Events</p>
                    <p className='tag'>D! UK</p>
                    <p className='time'>24.04.2025, 03 pm:30</p>
                </div>

                <div className='latest-wrapper'>
                    <h1>SD4P Collective: How can Service Design drive meaningful sustainability impact</h1>
                    <div className='latest-story'>
                        <p>Recap: SD4P Collective working session – 28th March 2025</p>
                        <p className='underline'>Read Story</p>
                    </div>
                </div>
                

                <div className='sec-6-tags mt-65'>
                    <p className='tag'>Events</p>
                    <p className='tag'>D! UK</p>
                    <p className='time'>06.12.2024, 02 pm:30</p>
                </div>

                <div className='latest-wrapper'>
                    <h1>Designing Tomorrow: Speculative Thinking Shapes Our Present</h1>
                    <div className='latest-story'>
                        <p>Design Declares' November Event Challenges Perspectives on Sustainability and Innovation</p>
                        <p className='underline'>Read Story</p>
                    </div>
                </div>

                <button className='btn'> See all the latest</button>


            </div>
        </div>
    )
}