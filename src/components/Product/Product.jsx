import ruble from '../../assets/ruble-small.png';
import { NavLink } from 'react-router-dom';
import formatMoney from '../../utils/formatMoney';

const Product = ({product}) => {

    return (
        <NavLink to={`/game/${product.id}`}>
            <div className="product">
                <div className="product-img">
                    <img src={product.preview} alt="product" />
                </div>
                <h2>{product.subtitle}</h2>
                <h3>{product.name}</h3>
                <div className='product-footer'>
                    <p>Цена:</p>
                    <span>{formatMoney(product.price)}</span>
                    <img src={ruble} alt="ruble" />
                </div>
            </div>
        </NavLink>
    )
}
export default Product;