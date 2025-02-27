import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Hero.scss';
import BallPit from '../BallPit/BallPit';


export default () => {

    const heroRef = useRef(null);

    useEffect(() => {
        const hero = heroRef.current;

        gsap.fromTo(
            hero.querySelectorAll('.Hero__content-wrapper p, .Hero__content-wrapper h2'),
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.3 }
        );

        gsap.fromTo(
            hero.querySelector('.Hero__decor'),
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
    }, []);


    const [dimensions, setDimensions] = useState({
        width: Math.min(window.innerWidth * 0.95, 1600),
        height: 770, // можно адаптировать под нужную высоту
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: Math.min(window.innerWidth * 0.95, 1600),
                height: 770,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='Hero container' ref={heroRef}>
            <div className='Hero_balls free_img'>
                <BallPit width={dimensions.width} height={dimensions.height} />
            </div>
            <div className='Hero__content'>
                <div className='Hero__content-wrapper'>
                    <p className='Hero__content-vibers'>Vibers — create the vibe on CT and earn Vibe Points</p>
                    <h2 className='Hero__content-title'>We Are Creating The Vibe</h2>
                </div>
                <div className='Hero__content-wrapper'>
                    <p className='Hero__content-subtitle'>These are our partners  </p>
                    <p className='Hero__content-description'>Earn <span>20%</span> to <span>300%</span> more tokens by creating content about them! The bigger the bubble, the higher the multiplier</p>
                </div>
            </div>
            <div className='Hero__decor'></div>
        </div>
    )
}