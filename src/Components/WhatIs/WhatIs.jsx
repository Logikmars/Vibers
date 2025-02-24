import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatIs.scss';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default () => {

    const whatIsRef = useRef(null);

    useGSAP(
        () => {
            const whatIs = whatIsRef.current;

            gsap.fromTo(
                whatIs,
                { opacity: 0, x: 150 },
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: whatIs,
                        start: 'top 80%',
                        end: 'top 80%',
                        scrub: 1,
                        // markers: true
                    },
                }
            );
        },
        { scope: whatIsRef }
    )


    return (
        <div className='WhatIs container' ref={whatIsRef}>
            <img src="/img/top.webp" alt="" />
            <div className='WhatIs__content'>
                <h2 className='WhatIs__content-title title'>What Is Vibers?</h2>
                <p className='WhatIs__content-description'>Vibers is a place where creative people post content, memes, and jokes about Web3. No boring rules: just share what inspires you and earn Vibe Points along the way.
                </p>
            </div>
        </div>
    )
}