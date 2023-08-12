import '../../styles/FooterItem.css'

const FooterItem = ({img, text, subText}) => {

    return(
        <div className='footerItem'>
            <img className='footerImg' src={img} alt='shipping'></img>
                <h4>
                    {text}
                </h4>
                <p>
                    {subText}
                </p>
        </div>
    )
}

export default FooterItem

