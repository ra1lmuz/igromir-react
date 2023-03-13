import calculatePercent from "./calculatePercent";

const cartTotal = (items) => {
    return items.reduce((prev, current) => (prev += calculatePercent(current.price, current.discount)), 0);
};

export default cartTotal;