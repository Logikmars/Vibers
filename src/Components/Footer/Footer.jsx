import HeaderItem from '../Header/HeaderItem/HeaderItem';
import './Footer.scss';


const imgsrc = [
    {
        imgg: './img/header/dexscreen.svg',
    },
    {
        imgg: './img/header/x.svg',
    },
    {
        imgg: './img/header/tg.svg',
    },
];

export default () => {return (
    <div className='Footer container'>
        <div className='Footer__item'>
            <img src="./img/header/logo.png" alt="" />
            <div className='Footer__item-nav'>
                {imgsrc.map((item, index)=>(
                    <HeaderItem key={index} src={item.imgg}/>
                ))}
            </div>
        </div>
        <div className='Footer__policy'>
            <p className='Footer__policy-copy'>Copyright © 2025 Vibers. All rights reserved.</p>
            <a href='#' className='Footer__policy-policy'>Privacy Policy</a>
        </div>
    </div>
)}