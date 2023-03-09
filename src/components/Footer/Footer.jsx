import Logo from "../Header/Logo/Logo";
import { NavLink } from "react-router-dom";
import Basketicon from "../../assets/basket.png";
import Homeicon from "../../assets/home.png";
import Catalogicon from "../../assets/catalog.png";
import Licenseicon from "../../assets/license.png";

const Footer = () => {
    return (
        <footer className="section footer">
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

            <div className="footer-license">
                <NavLink>
                    <div>
                        <img src={Licenseicon} alt="License" />
                            Лицензионное соглашение
                    </div>
                </NavLink>
            </div>
        </footer>
    )
}

export default Footer;