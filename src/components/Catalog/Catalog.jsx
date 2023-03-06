import { useState } from "react";
import Searchicon from "../../assets/search.png";
import PRODUCTS from "../../data/PRODUCTS";
import Product from "../Product/Product";

const Catalog = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((item) => item.name.toLowerCase().includes(query));

    const onChangeQuery = (event) => {
        setQuery(event.target.value.toLowerCase());
        console.log(event);
    }

    return (
        <section className="section catalog">
            <header className="section-header">
                <h2 className="section__title">
                    Каталог
                </h2>

                <div className="search-box">
                    <input 
                        type="text"
                        value={query}
                        placeholder="Search"
                        onChange={(event) => onChangeQuery(event)} 
                    />
                    <div>
                        <img src={Searchicon} alt="search" />
                    </div>
                </div>
            </header>

            <div className="products-box">
                {
                    filteredProducts.length ?
                    (
                        filteredProducts.map((product) => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })
                    )
                    :
                    <h2 className="empty">По вашему запросу "{query}" ничего не найдено!</h2>
                }
            </div>
        </section>
    )
}

export default Catalog;