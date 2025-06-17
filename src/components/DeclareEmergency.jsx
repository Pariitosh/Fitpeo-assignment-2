import '../styles/DeclareEmergency.css'
import { useEffect, useRef } from 'react';
export default function DeclareEmergency() {
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
        <div className="sec-5" ref={wrapperRef}>
            <div className="sec-5-left">
                <p>Declare Emergency Now</p>
            </div>
            <div className="sec-5-right">
                <p>
                    Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service
                    design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also
                    welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters
                    from other countries. All declarations will be named and published on this site.
                </p>

                <div className='declare-form'>
                    <h1>I am Declaring Emergency</h1>

                    <div className='check-form'>
                        <label className="custom-radio">
                            <input type="radio" name="group1" value="option1"/>
                            <span className="checkmark"></span>
                            As a business
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="group1" value="option2"/>
                            <span className="checkmark"></span>
                            As an Individual
                        </label>
                        <label className="custom-radio">
                            <input type="radio" name="group1" value="option2"/>
                            <span className="checkmark"></span>
                            As a public institution
                        </label>
                        <label className="custom-radio">
                           <input type="radio" name="group1" value="option2"/>
                            <span className="checkmark"></span>
                            As a team or department
                        </label>
                    </div>


                    <div className='form-input'>
                        <label>Individual Name:*</label>
                        <input />
                    </div>

                    <div className='form-input'>
                        <label>Website:*</label>
                        <input />
                    </div>

                    <div className='form-input'>
                        <label>Country:*</label>
                        <input />
                    </div>

                    <div className='form-input'>
                        <label>Discipline:*</label>
                        <input />
                    </div>

                    <div className='form-input'>
                        <label>Email:*</label>
                        <input />
                    </div>

                    <div className='form-input'>
                        <label>Individual Name:*</label>
                        <input />
                    </div>

                    <div className='form-input last-input'>

                        <textarea placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares" />
                    </div>

                    <div className='agreements'>

                    
                     <label className="custom-radio">
                           <input type="radio" name="group1" value="option2"/>
                            <span className="checkmark"></span>
                            I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.
                    </label>
                         <label className="custom-radio">
                           <input type="radio" name="group1" value="option2"/>
                            <span className="checkmark"></span>
                            I would like to be added to the Design Declares! newsletter and receive further updates.
                    </label>
                    </div>
                    <p className='underline privacy'>View our Privacy Policy</p>
                    <button className='btn'>Declare Emergency Now</button>
                </div>


            </div>
        </div>
    )
}