import Card from '../Cards/Card'
import styles from '../components/Products.module.css'

function Products(){
    return(
        <div  className={styles.container}>
            <div>
            <p><strong>How can we help<br/>
                       your Business ?</strong></p>
                       <p>We build readymade websites, mobile applications,<br/>
                          and elaborate online business services.</p>
            <div className={styles.products}>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            </div>
        </div>
        
    )
}
export default Products