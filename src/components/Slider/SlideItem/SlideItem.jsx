import { NavLink } from "react-router-dom";

const SlideItem = ({item}) => {
    return (
        <div className="slide">
            <div className="slide__left">
                <p className="gameName">{item.gameName}</p>
                <h1>{item.subtitle}</h1>
                <div className="slide_timer">
                    <div className="timer_block_active">
                        <h3>{item.day}</h3>
                        <p>Days</p>
                    </div>
                    <div className="timer_block">
                        <h3>{item.hour}</h3>
                        <p>Hours</p>
                    </div>
                    <div className="timer_block">
                        <h3>{item.minute}</h3>
                        <p>Minutes</p>
                    </div>
                    <div className="timer_block">
                        <h3>{item.second}</h3>
                        <p>Seconds</p>
                    </div>
                </div>
                <NavLink className="slide-btn" to={item.button.url}>
                    {item.button.text}
                </NavLink>
            </div>
            <div className="slide__right">
                <div className="slide-img">
                    <img src={item.url} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default SlideItem;