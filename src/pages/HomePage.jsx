import Catalog from "../components/Catalog/Catalog";
import Distribution from "../components/Distribution/Distribution";
import Promotion from "../components/Promotion/Promotion";
import Slider from "../components/Slider/Slider";

const HomePage = () => {
    return (
        <>
        <Slider />
        <Catalog />
        <Promotion />
        <Distribution />
        </>
    );
}

export default HomePage;