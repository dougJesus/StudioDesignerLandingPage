import styles from '../Cards/Card.module.css'
import cardOne from '../images/cardOne.svg'

function Card({img, title, paragraphy}){
    return(
            <div className={styles.card}>
            <img src={cardOne}  alt='ERROR'></img>
            <p><strong>Business Idea<br/>
                       Planning</strong></p>
            <p>We present you a proposal and<br/>
               discuss niffty-gritty like</p>
            </div>
    )
}
export default Card