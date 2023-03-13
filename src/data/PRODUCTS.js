import product1 from "../assets/csgo.jpg";
import product2 from "../assets/apex.jpg";
import product3 from "../assets/pubg.jpg";
import product4 from "../assets/dota.jpg";
import product5 from "../assets/gta.jpg";
import product6 from "../assets/cyberpunk.jpg";
import product7 from "../assets/snowrunner.jpg";
import product8 from "../assets/rdr.jpg";

const PRODUCTS = [
    {
        id: 1,
        subtitle: "Тактический шутер",
        name: "Counter - Strike : Global Offensive",
        preview: product1,
        price: 499,
        discount: 0,
    },
    {
        id: 2,
        name: "Apex",
        subtitle: "Шутер от первого лица",
        preview: product2,
        price: 899,
        discount: 0,
    },
    {
        id: 3,
        subtitle: "Королевская битва",
        name: "PUBG",
        preview: product3,
        price: 1500,
        discount: 0,
    },
    {
        id: 4,
        subtitle: "МОВА",
        name: "DOTA 2",
        preview: product4,
        price: 999,
        discount: 0,
    },
    {
        id: 5,
        subtitle: "Приключения",
        name: "GTA 5",
        preview: product5,
        price: 1500,
        discount: 50,
    },
    {
        id: 6,
        subtitle: "Шутер",
        name: "Cyberpunk 2077",
        preview: product6,
        price: 1500,
        discount: 35,
    },
    {
        id: 7,
        subtitle: "Симулятор",
        name: "Snowrunner",
        preview: product7,
        price: 570,
        discount: 70,
    },
    {
        id: 8,
        subtitle: "Прохождение",
        name: "Red Dead Redemption 2",
        preview: product8,
        price: 500,
        discount: 15,
    },
]

export default PRODUCTS;