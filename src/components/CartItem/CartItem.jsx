import ruble from '../../assets/ruble-small.png';
import { useContext } from "react";
import formatMoney from '../../utils/formatMoney';
import del from '../../assets/del.svg';
import { CartContext } from '../../pages/Root';
import calculatePercent from '../../utils/calculatePercent';

const CartItem = ({ item }) => {
    
    const { removeCartItemById } = useContext(CartContext);
    
    const price = calculatePercent(item.price, item.discount);

    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={item.preview} alt={item.name} />
            </div>  
            <div className="cart-item__info">
                <h3>{item.name}</h3>
                <div className="cart-item__price">
                    <span>{formatMoney(price)}</span>
                    <img src={ruble} alt="ruble" />
                </div>

                <button onClick={removeCartItemById.bind(this, item.id)}>
                    <img src={del} alt="del" />
                </button>
            </div>
        </div>
    )
}

export default CartItem;