import ruble from '../../assets/ruble-small.png';

const Product = ({product}) => {
    return (
        <div className="product">
            <div className="product-img">
                <img src={product.preview} alt="product" />
            </div>
            <h2>{product.subtitle}</h2>
            <h3>{product.name}</h3>
            <div className='product-footer'>
                <p>Цена:</p>
                <span>{product.price}</span>
                <img src={ruble} alt="ruble" />
            </div>
        </div>
    )
}
export default Product;