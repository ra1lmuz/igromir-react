import { useContext, useState } from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import Balanceicon from "../assets/ruble.png";
import PRODUCTS from "../data/PRODUCTS";
import calculatePercent from "../utils/calculatePercent";
import formatMoney from "../utils/formatMoney";
import { CartContext } from "./Root";

const SinglePage = () => {
  const params = useParams();
  const product = PRODUCTS.find((item) => item.id == params.id);
  const { addToCart } = useContext(CartContext);

  console.log(product);

  const price = calculatePercent(product.price, product.discount);

  return (
    <div className="games">
      <div className="game" key={product.id}>
        <div className="game-img">
          <img src={product.preview} alt={product.name} />
        </div>
        <div className="game-content">
          <h2>{product.name}</h2>
          <div>
            <h3>{formatMoney(price)}</h3>
            <img src={Balanceicon} alt="Balanceicon" />
          </div>
          <button
            className="add-basket"
            onClick={addToCart.bind(this, product)}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
