import '../styles/LandingPage.css'
import { useEffect, useRef, useState } from 'react';
export default function LandingPage(){
    const [visible,setVis]=useState(true)
    const [visible2,setVis2]=useState(false)
    const wrapperRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        setTimeout(() => {
                            setVis(false)
                        }, 1500);
                        setTimeout(() => {
                            setVis2(true)
                        }, 500);
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
        <div className="sec-1"  ref={wrapperRef}>
            <div className="sec-1-left">
                {visible && <h1 className="top-heading">D{visible2&&<span>!</span>}</h1>}
                <h1>DESIGN</h1>
                <h1>DECLARES</h1>
                <h1 className='text-orange'>UK</h1>
            </div>
            <div className="sec-1-right anim">
                <p>
                    Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a 
                    climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our
                    industry to reimagine, rebuild and heal our world.
                </p>
            </div>
        </div>
    )
}