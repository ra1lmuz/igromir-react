import { NavLink } from "react-router-dom";

const PromotionProduct = ({product}) => {
    return (
        <NavLink to="/">
            <div className="product-promotion">
                <div className="product-promotion-img">
                    <img src={product.preview} alt="promotion-img" />
                </div>
                <div className="product-promotion-sale">
                    <p>-{product.discount}%</p>
                </div>
            </div>
        </NavLink>
    )
}

export default PromotionProduct;