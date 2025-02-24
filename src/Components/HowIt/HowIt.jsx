import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HowIt.scss';
import HowItitem from './HowItitem/HowItitem';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const items = [
    {
        num: "1",
        imgsrc: "./img/howit.png",
        title: "Create",
        description: "Publish engaging, vibe-driven content about Web3."
    },
    {
        num: "2",
        imgsrc: "./img/howit.png",
        title: "Engage",
        description: "Attract as many people as possible — our AI will analyze the vibe of your posts. "
    },
    {
        num: "3",
        imgsrc: "./img/howit.png",
        title: "Get Rewards",
        description: "The more interest your posts spark, the more Vibe Points you rack up."
    },
];

export default () => {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            for (let i = 0; i < 3; i++) {
                gsap.fromTo(`.showEl-${i}`,
                    { x: -100, opacity: 0 },
                    {
                        x: 0, opacity: 1,
                        scrollTrigger: {
                            trigger: '.HowIt__items',
                            // markers: true,
                            scrub: 3,
                            start: `${(i) * 150}px 80%`,
                            end: `${(i) * 150}px 80%`
                        }
                    }
                );
            }

        },
        { scope: containerRef }
    )

    return (
        <div className='HowIt container' ref={containerRef}>
            <h2 className='HowIt__title title'>How It Works</h2>
            <div className='HowIt__items'>
                {items.map((item, index) => (
                    <HowItitem className={`showEl-${index}`} ind={10 - index} key={index} num={item.num} imgsrc={item.imgsrc} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    )
}