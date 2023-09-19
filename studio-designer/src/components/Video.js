import styles from '../components/Video.module.css'
import video from '../images/video.svg'

function Video(){
    return(
        <div className={styles.video}>
            <div>
                <img src={video} width={550} heigth={372} alt='ERROR'></img>
            </div>
            <div>
                <h1>Great Digital Product <br/>
                    Agency since 2016 </h1>
                <p>Our Business Plan is a written document describing a company's core<br/>
                   business activites, Objectives, and how it plans to achieve its goals. Our<br/>
                   goal is to provide our client high quality Product with modern idea <br/>
                   accordingly their budgets and according thir reuirements.</p>
            </div>
            
        </div>
    )
}
export default Video