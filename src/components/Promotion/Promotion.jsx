import { useState } from "react";
import PRODUCTS from "../../data/PRODUCTS";
import PromotionProduct from "../PromotionProduct/PromotionProduct";

const Promotion = () => {
    const [products, setProducts] = useState(PRODUCTS);

    const filteredProductsDiscount = products.filter((item) => item.discount > 0);

    return (
        <section className="section promotion">
            <header className="section-header">
                <h2 className="section__title">
                    Акции
                </h2>
            </header>

            <div className="products-box">
                {
                    filteredProductsDiscount.map((product) => {
                        return (
                            <PromotionProduct key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Promotion;