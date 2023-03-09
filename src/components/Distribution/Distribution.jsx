import Sendicon from "../../assets/send.png"

const Distribution = () => {
    return (
        <section className="section distribution">
            <div className="distribution-title">
                Получайте новости и акции самыми первыми!
            </div>
            <div className="distribution-subtitle">
                Подпишитесь на рассылку!
            </div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="E-mail.."
                />
                <div>
                    <img src={Sendicon} alt="search" />
                </div>
            </div>
        </section>
    )
}

export default Distribution;