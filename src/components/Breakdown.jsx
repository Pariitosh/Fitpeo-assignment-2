import { useEffect, useRef, useState } from 'react';
import '../styles/Breakdown.css'

import arrow from '../assets/arrow.svg'
export default function Breakdown() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
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

        <div className="sec-2 " ref={wrapperRef}>

            <div className="sec-2-left">
                <p>This is Breakdown</p>
            </div>


            <div className="sec-2-right ">
                <p>
                    The science is settled. We are in an emergency of climate and nature. The world is past breaking point;
                    the breakdown has begun...
                </p>

                <div className='sec-2-line'></div>
                <div className='sec-2-upper' onClick={() => setIsOpen1(!isOpen1)}>
                    <h2 >The Role of Design</h2>
                    <img src={arrow} className={isOpen1 ? "arrow rotated" : "arrow"}/>
                </div>

                <div className={`para ${isOpen1 ? "show" : ""}`}>
                    <p className='p11'>As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.</p>
                    <p className='p22'>Because designers are makers. We make ideas real. We generate solutions. We build the world - dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.</p>

                </div>
                <div className='sec-2-line'></div>
                <div className='sec-2-upper' onClick={() => setIsOpen2(!isOpen2)}>
                    <h2 >Time for Change</h2>
                    <img src={arrow} className={isOpen2 ? "arrow rotated" : "arrow"}/>
                </div>

                <div className={`para ${isOpen2 ? "show" : ""}`}>
                    <p className='p11'>Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.</p>
                    <p className='p22'> It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.</p>

                </div>
                <div className='sec-2-line'></div>
                <div className='sec-2-upper' onClick={() => setIsOpen3(!isOpen3)}>
                    <h2 >Act with Urgency</h2>
                    <img src={arrow} className={isOpen3 ? "arrow rotated" : "arrow"}/>
                </div>

                <div className={`para ${isOpen3 ? "show" : ""}`}>
                    <p className='p11'>We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.</p>
                    <p className='p22'>This is the most important brief of our lives. Join us as we begin to design a climate-positive future.</p>

                </div>

                <button className='btn sec-2-btn'>View our D! Intro Video</button>
            </div>

        </div>



    )
}