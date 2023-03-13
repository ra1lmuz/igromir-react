import { useState } from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import Balanceicon from "../assets/ruble.png";
import PRODUCTS from "../data/PRODUCTS";
import formatMoney from "../utils/formatMoney";


const SinglePage = () => {

    const params = useParams();
    const [product, setProduct] = useState(PRODUCTS);
    const productSingle = product.filter(item => item.id == params.id);

    return (
        <div className="games">
            <div className="game" key={product.id}>
                <div className="game-img">
                    <img src={productSingle[0].preview} alt={product.name} />
                </div>
                <div className="game-content">
                    <h2>{productSingle[0].name}</h2>
                    <div>
                        <h3>{formatMoney(productSingle[0].price)}</h3>
                        <img src={Balanceicon} alt="Balanceicon" />
                    </div>
                    <button className="add-basket">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SinglePage;