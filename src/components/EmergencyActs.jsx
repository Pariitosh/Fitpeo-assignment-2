import '../styles/EmergencyActs.css'
import { useEffect, useRef } from 'react';
export default function EmergencyActs(){
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
        <div className="sec-4" ref={wrapperRef}>
           <div className="sec-4-left">
                <p>8 Acts of Emergency</p>
            </div>
            <div className="sec-4-right">
                <p>
                  What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something 
                  about it. Here are eight places to start:
                </p>

                <ul className='sec-4-acts'>
                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>1</h1>
                            <h1 className='heading-name'>Sound the Alarm</h1>
                        </div>
                        <p>Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - 
                            in our organisations and our practice.</p>
                    </li>

                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>2</h1>
                            <h1 className='heading-name'>Start the Journey</h1>
                        </div>
                        <p>Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by 
                            making measurable change to our practice. The Design Declares Toolkit is a great place to start.</p>
                    </li>

                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>3</h1>
                            <h1 className='heading-name'>Bring Clients with Us</h1>
                        </div>
                        <p>Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every 
                            design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.</p>
                    </li>

                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>4</h1>
                            <h1 className='heading-name'>Measure What We Make</h1>
                        </div>
                        <p>Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.</p>
                    </li>

                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>5</h1>
                            <h1 className='heading-name'>Redefine ‘Good’</h1>
                        </div>
                        <p>Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.</p>
                    </li>

                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>6</h1>
                            <h1 className='heading-name'>Educate, Accelerate</h1>
                        </div>
                        <p>Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.</p>
                    </li>

                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>7</h1>
                            <h1 className='heading-name'>Design for Justice</h1>
                        </div>
                        <p>Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.</p>
                    </li>

                    <li>
                        <div className='acts-heading'>
                            <h1 className='heading-sr'>8</h1>
                            <h1 className='heading-name'>Amplify Voices for Change</h1>
                        </div>
                        <p>Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.</p>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}