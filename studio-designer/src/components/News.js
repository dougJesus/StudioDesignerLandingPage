import styles from '../components/News.module.css'
import Button from '../buttons/Button.js'

function News(){
    return(
        <div className={styles.container}>
        <div className={styles.newst}>
            <div>
                <h2>Subscribe Newsletter</h2>
                <p>I will update good news and promotion service not spam</p>
            </div>
            <div className={styles.but}>
                <input placeholder="Enter your email address.."></input>
                <Button/>
            </div>
        </div>
        </div>
    )
}
export default News