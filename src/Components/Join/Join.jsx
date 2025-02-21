import './Join.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    <div className='Join container' ref={whatIsRef}>
        <div className='Join__content'>
            <h2 className='title'>Join Vibers</h2>
            <p className='Join__description'>The more you post, the more chances you have to earn cool rewards. Feel the power of AI and the supportive energy of like-minded people bringing Web3 closer to everyone.</p>
            <button className='allbtn Join__btn'>Start Creating</button>
        </div>
        <img src="./img/kvadrat.png" alt="" />
    </div>
)}