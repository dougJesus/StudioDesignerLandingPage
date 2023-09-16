import Card from '../Cards/Card'
import styles from '../components/Products.module.css'
import cardOne from '../images/cardOne.svg'
import cardTwo from '../images/cardTwo.svg'
import cardThree from '../images/cardThree.svg'
import cardFour from '../images/cardFour.svg'

function Products(){
    return(
        <div  className={styles.container}>
            <div>
                <p><strong>How can we help<br/>
                        your Business ?</strong></p>
                        <p>We build readymade websites, mobile applications,<br/>
                            and elaborate online business services.</p>
                            <br></br>
            <br/>
            <br/>
            <div className={styles.products}>
                <Card
                    img={cardOne}
                    title="Business Idea Planniing"
                    paragraphy="We present you a proposal and discuss niffty-gritty like"
                />
                <Card
                    img={cardTwo}
                    title="Financial Planning Systeme"
                    paragraphy="Protocols apart from aengage models, pricing billing"
                />
                <Card
                    img={cardThree}
                    title="Development Website and App"
                    paragraphy="Communication protocols apart from engagement models"
                />
                <Card
                    img={cardFour}
                    title="Market Analysis Project"
                    paragraphy="Protocols apart from aengage models, pricing billing"
                />
            </div>
            </div>
        </div>
        
    )
}
export default Products