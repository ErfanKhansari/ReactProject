import bigImage from './img/bckgrnd.jpg'
import small from './img/small.jpg'
import styles from './BackGround.module.css'

const BackGround = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 parent">
                <img src={bigImage} class={`img-fluid ${styles.size}`} alt="BIG IMAGE FOR BACKGROUND"/>
                <img src={small} class={`img-fluid ${styles.small}`} alt="SMALL IMAGE FOR SHOE"></img>
                </div>
            </div>
        </div>
    )
}
export default BackGround;