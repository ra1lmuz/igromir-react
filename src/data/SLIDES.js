import image from '../assets/banner.jpg';
import image2 from '../assets/banner2.jpg';
import image3 from '../assets/banner3.jpg';

const SLIDES = [
    {
        id: 1,
        url: image,
        gameName: "Valorant",
        subtitle: "Лидер продаж #3",
        day: "26",
        hour: "06",
        minute: "34",
        second: "45",
        button: {
            url: "/",
            text: "Узнать подробнее"
        }
    },
    {
        id: 2,
        url: image2,
        gameName: "Apex",
        subtitle: "Лидер продаж #1",
        day: "04",
        hour: "12",
        minute: "54",
        second: "34",
        button: {
            url: "/",
            text: "Узнать подробнее"
        }
    },
    {
        id: 3,
        url: image3,
        gameName: "Minecraft",
        subtitle: "Лидер продаж #2",
        day: "10",
        hour: "01",
        minute: "43",
        second: "11",
        button: {
            url: "/",
            text: "Узнать подробнее"
        }
    }
];

export default SLIDES;