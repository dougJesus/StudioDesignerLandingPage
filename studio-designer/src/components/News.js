import styles from '../components/News.module.css'
import Button from '../buttons/Button.js'

function News(){
    return(
        <div className={styles.newst}>
            <div>
                <h2>Subscribe Newsletter</h2>
                <p>Subscribe Newsletter</p>
            </div>
            <div className={styles.but}>
                <input placeholder="Enter your email address.."></input>
                <Button/>
            </div>
        </div>
    )
}
export default News