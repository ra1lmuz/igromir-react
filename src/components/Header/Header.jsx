import Logo from "./Logo/Logo";
import { NavLink } from "react-router-dom";
import Basketicon from "../../assets/basket.png";
import Homeicon from "../../assets/home.png";
import Catalogicon from "../../assets/catalog.png";
import Balanceicon from "../../assets/ruble.png";




const Header = () => {
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

                <NavLink to="/">
                    <div>
                    <img src={Basketicon} alt="Basket" />
                        Корзина
                    </div>
                </NavLink>
            </nav>
            
            <div className="header-balance">
                <img src={Balanceicon} alt="Balance" />
                <div>
                    Баланс: <span>12880</span>
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