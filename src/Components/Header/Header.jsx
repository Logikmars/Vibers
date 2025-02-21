import './Header.scss';
import HeaderItem from './HeaderItem/HeaderItem';

const imgsrc = [
    {
        imgg: '/img/header/dexscreen.svg',
    },
    {
        imgg: '/img/header/x.svg',
    },
    {
        imgg: '/img/header/tg.svg',
    },
];

export default () => {
    return (
        <div className='Header container'>
            <div className='Header__left'>
                <img src="/img/header/logo.png" alt="" />
                <div className='Header__left-block'>
                    <button className='Header__left-block-join Header__btn allbtn'>Join Vibers</button>
                    <button className='Header__left-block-leader Header__btn allbtn'>Leaderboard</button>
                </div>
            </div>
            <div className='Header__nav'>
                {imgsrc.map((item, index) => (
                    <HeaderItem key={index} src={item.imgg} />
                ))}
            </div>
        </div>
    )
}