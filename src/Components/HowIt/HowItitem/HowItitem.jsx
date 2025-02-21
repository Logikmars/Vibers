import './HowItitem.scss';
export default ({ num, imgsrc, title, description}) => {return (
<div className='HowItitem'>
    <div className='HowItitem__top'>
        <p className='HowItitem__top-num'>{num}</p>
        <img src={imgsrc} alt="" />
    </div>
    <p className='HowItitem__title'>{title}</p>
    <p className='HowItitem__description'>{description}</p>
</div>
)}