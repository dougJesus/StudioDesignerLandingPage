import styles from '../Cards/Card.module.css'

function Card({img, title, paragraphy}){
    return(
            <div className={styles.card}>
            <img src={img}  alt='ERROR'></img>
            <p><strong>{title}</strong></p>
            <p>{paragraphy}</p>
            </div>
    )
}
export default Card