import './HowItitem.scss';
export default ({ num, ind, title, description, className }) => {
    return (
        <div className={`HowItitem_wrapper ${className}`} style={{
            zIndex: ind
        }}>
            <div className={`HowItitem_img HowItitem_img_${num} HowItitem_img_back free_img`}>
                <img src={`/img/${num}.webp`} alt="" />
            </div>
            <div className='HowItitem_border_wrapper'>
                <div className='HowItitem_border free_img'>
                    <div className='HowItitem_border_inner'></div>
                </div>
                <div className={`HowItitem`}>
                    <div className={`HowItitem_img HowItitem_img_${num} HowItitem_img_top free_img`}>
                        <img src={`/img/${num}.webp`} alt="" />
                    </div>
                    <div className='HowItitem_content'>

                        <div className='HowItitem__top'>
                            <p className='HowItitem__top-num'>{num}</p>
                            {/* <img src={imgsrc} alt="" /> */}
                        </div>
                        <p className='HowItitem__title'>{title}</p>
                        <p className='HowItitem__description'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}