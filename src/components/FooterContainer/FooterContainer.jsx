import shipping from './assets/shipping.svg';
import card from './assets/card.svg';
import padlock from './assets/padlock.svg';
import FooterItem from './FooterItem';
import '../../styles/FooterContainer.css'


const FooterContainer = () => {

    return(
        <>
        <div className='footerContainer'>
            <FooterItem img={shipping} text={'ENVÍOS A C.A.B.A. y G.B.A'} subText={'C.A.B.A. $750.- G.B.A $ 1.000.- / $1.300.-'}/>
            <FooterItem img={card} text={'PAGO ONLINE'} subText={'TRANSFERENCIA BANCARIA / MERCADO PAGO'}/>
            <FooterItem img={padlock} text={'COMPRA SEGURA'} subText={'PROTEGEMOS TUS DATOS'}/>
        </div>
        </>

    )
}

export default FooterContainer