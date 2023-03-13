import { useContext, useEffect, useRef } from "react";
import formatMoney from "../../utils/formatMoney";
import CartItem from "../CartItem/CartItem";
import { ModalContext } from "../../pages/Root";
import { CartContext } from "../../pages/Root";
import cartTotal from "../../utils/cartTotal";
import Balanceicon from "../../assets/ruble.png";


const CartModal = () => {

    const {isModalActive, toggleModal} = useContext(ModalContext);
    const cart = useContext(CartContext);
    const overlayRef = useRef();

    const total = cartTotal(cart.cartItems);

    const closeModal = (event) => {
        if (event.target === overlayRef.current) {
            toggleModal();
        }
    }

    useEffect(() => {
        if (isModalActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => document.body.style.overflow = "";
    }, [isModalActive]);

    return (
        <div
            ref={overlayRef}
            onClick={(e) => closeModal(e)}
            className={`${isModalActive ? "overlay active" : "overlay"}`}
        >
            <div className="modal">
                <header className="modal-header">
                    <h2>Корзина</h2>
                </header>

                <div className="modal-body">
                    <div className="cart-items">
                        {
                            cart.cartItems.map((item) => {
                                return <CartItem key={item.id} item={item} />
                            })
                        }
                    </div>
                </div>

                <div className="modal-footer">
                    <div className="total">

                        <div className="row">
                            <div className="total-price">
                                Итого: {formatMoney(total)}
                                <img src={Balanceicon} alt="Balanceicon" />
                            </div>
                        </div>
                    </div>

                    <button className="button-modal">
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartModal;