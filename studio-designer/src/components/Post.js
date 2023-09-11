import styles from '../components/Post.module.css'
import Imagepost from '../images/Imagepost.svg'
import Button from '../buttons/Button'

function Post(){
    return(
        <div className={styles.container}>
            <div>
                <h1>A Digital Product Agency</h1>
                <p>Leading digital agency with solid design and development<br/>
                   expertise. We build readymade websites, mobile applications,<br/>
                   and elaborate online business services.</p>
                   <br/>
                   <br/>
                   <Button/>
            </div>
            <div>
                <img src={Imagepost}></img>
            </div>
        </div>
    )
}
export default Post