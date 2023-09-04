import Card from 'react-bootstrap/Card';
import '../../styles/item.css';
import { Link } from 'react-router-dom';


    const Item = ({id, img, name, price})=> {

        return (
        <>
        <div key={id} className=' col-xs-10 col-sm-4 col-lg-2 cardElement cardBordeTop'>
        <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={img} alt={name} className='cardBordeTop'/>
            <Card.Body className='bg-light'>
                <Card.Title className='cardText py-2'>{name}</Card.Title>
                <p>
                    Precio: $ {price}
                </p>
            </Card.Body>
        </Link>
        </div>
        </>
    );
}

export default Item
