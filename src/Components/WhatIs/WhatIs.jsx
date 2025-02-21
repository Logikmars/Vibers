import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatIs.scss';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    
    const whatIsRef = useRef(null);

    useEffect(() => {
        const whatIs = whatIsRef.current;

        gsap.fromTo(
            whatIs,
            { opacity: 0, x: 150 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1.5, 
                scrollTrigger: {
                    trigger: whatIs,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    
    return (
    <div className='WhatIs container' ref={whatIsRef}>
        <div className='WhatIs__content'>
            <h2 className='WhatIs__content-title title'>What Is Vibers?</h2>
            <p className='WhatIs__content-description'>Vibers is a place where creative people post content, memes, and jokes about Web3. No boring rules: just share what inspires you and earn Vibe Points along the way.
            </p>
        </div>
        <img src="./img/kvadrat.png" alt="" />
    </div>
)}