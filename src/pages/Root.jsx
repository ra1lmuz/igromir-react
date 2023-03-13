import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import useCart from "../hooks/useCart";
import CartModal from "../components/CartModal/CartModal";

export const ModalContext = createContext({});
export const CartContext = createContext({});


const Root = () => {
    const [isModalActive, setModalActive] = useState(false);

    const cart = useCart([]);
    
    const toggleModal = setModalActive.bind(this, !isModalActive);

    return(
        <CartContext.Provider value={cart}>
            <ModalContext.Provider value={{ isModalActive, toggleModal}}>
                <div className="layout">
                    <Header />
                    <main>
                        <Outlet />
                    </main>

                    <CartModal />

                    <Footer />
                </div>
            </ModalContext.Provider>
        </CartContext.Provider>
    );
}

export default Root;