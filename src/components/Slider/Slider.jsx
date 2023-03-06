import { useState } from "react";
import SLIDES from "../../data/SLIDES";
import SlideItem from "./SlideItem/SlideItem";
import nextBtn from "../../assets/next.png";
import prevBtn from "../../assets/prev.png";


const Slider = () => {
    const [items, setItems] = useState(SLIDES);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);
    const DotElements = items.map((item, index)=>{
        return (
            <div className={`${currentIndex === index ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}>
                
            </div>
        )
    })
    return (
        <section className="slider">
            <div className="wrapper">
                <div className="slides">
                    <SlideItem item={items[currentIndex]} />
                </div>

                <div className="control">
                    {
                        <button onClick={prev} className="prev">
                            <img src={prevBtn} alt="prevBtn" />
                        </button>
                    }
                    {
                        <button onClick={next} className="next">
                            <img src={nextBtn} alt="nextBtn" />
                        </button>
                    }
                </div>

                <div className="dots">
                    {DotElements}
                </div>
            </div>
        </section>
    );
}

export default Slider;