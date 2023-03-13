import Logo from "./Logo/Logo";
import { NavLink } from "react-router-dom";
import Basketicon from "../../assets/basket.png";
import Homeicon from "../../assets/home.png";
import Catalogicon from "../../assets/catalog.png";
import Balanceicon from "../../assets/ruble.png";
import formatMoney from "../../utils/formatMoney";
import { useContext } from "react";
import { ModalContext, CartContext } from "../../pages/Root";
import cartTotal from "../../utils/cartTotal";

const CartButton = () => {
  const { toggleModal } = useContext(ModalContext);

  return (
    <button onClick={toggleModal} className="modal-view">
      <div>
        <img src={Basketicon} alt="Basket" />
        Корзина
      </div>
    </button>
  );
};

const Header = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartTotal(cartItems);
  return (
    <header className="header">
      <NavLink to="/">
        <Logo />
      </NavLink>

      <nav>
        <NavLink to="/">
          <div>
            <img src={Homeicon} alt="Home" />
            Главная
          </div>
        </NavLink>

        <NavLink to="/">
          <div>
            <img src={Catalogicon} alt="Catalog" />
            Каталог
          </div>
        </NavLink>

        <CartButton />
      </nav>

      <div className="header-balance">
        <img src={Balanceicon} alt="Balance" />
        <div>
          Баланс: <span>{formatMoney(total)}</span>
        </div>
      </div>

      <div className="header-btn">
        <NavLink to="/">
          <div>Вход</div>
        </NavLink>

        <NavLink to="/">
          <div>Регистрация</div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
