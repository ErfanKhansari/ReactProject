import styles from './Cards.module.css'
import hani from './img/hani.webp'
import alisport from './img/alisport.webp'
import dayan from './img/dayan.webp'
const Cards = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className={`card ${styles.size}`} >
                        <img src={hani} className="card-img-top" alt="HANI COMPANY SHOES" />
                        <div className="card-body">
                            <h5 className="card-title">Hani Company</h5>
                            <p className="card-text">Hani company has been active in the field of children's shoes for several years and has been able to compete with its foreign counterparts in terms of resistance and appearance.The price-quality ratio of this workshop is excellent.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className={`card ${styles.size}`}>
                        <img src={alisport} className="card-img-top" alt="ALISPORT COMPANY SHOES" />
                        <div className="card-body">
                            <h5 className="card-title">AliSport Company</h5>
                            <p className="card-text">Ali Sport Company is one of the best in its field. The quality and durability of the shoes of this big workshop is famous in Iran and even over the course of several years, the shoes he makes do not get damaged.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className={`card ${styles.size}`} >
                        <img src={dayan} className={`card-img-top ${styles.dayan}`} alt="DAYAN BAKH COMPANY SHOES" />
                        <div className="card-body">
                            <h5 className="card-title">Dayan Bakh Company</h5>
                            <p className="card-text">If Ali Sport is one of the best, we can safely say that Dayan Bakh is the best shoe manufacturer in Iran. His works are known for being lightweight and flexible  and at the same time, he has a very high status.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cards;