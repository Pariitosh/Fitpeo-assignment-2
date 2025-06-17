import '../styles/Newsletter.css'
import { useEffect, useRef } from 'react';
import newsimg from '../assets/newsimg.webp'
export default function Newsletter() {
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
        <div className="sec-7" ref={wrapperRef}>
            <div className="sec-7-left">
                <p>The Design Declares Newsletter and Toolkit</p>
            </div>
            <div className="sec-7-right">

                <img src={newsimg}/>
                <p>Subscribe to the Design Declares UK newsletter to receive the latest news and updates. By signing up you will also gain access to The Design Declares Toolkit, a live and evolving Notion site co-created with our community. It is filled with the latest resources and methods to help you on your journey to climate-positive design.</p>
                <p className='news-p2'>Every signatory to Design Declares will receive an access link to the Toolkit. If you are unable to declare emergency quite yet, you can still access the Toolkit - just register below.</p>
                <div className='form-input'>
                        <label>Email:*</label>
                        <input />
                </div>
                <label className="custom-radio news-check">
                           <input type="radio" name="group1" value="option2"/>
                            <span className="checkmark"></span>
                            I would like to be added to the Design Declares! newsletter and receive further updates.
                    </label>
                <p className='underline privacy'>View our Privacy Policy</p>
                <button className='btn'>Subcsribe</button>
            </div>
            </div>
    )
}