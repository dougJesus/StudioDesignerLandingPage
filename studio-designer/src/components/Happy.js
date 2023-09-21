import styles from '../components/Happy.module.css'
import clientefeliz from '../images/clientefeliz.svg'
import clientefelizTwo from '../images/clientefelizTwo.svg'
function Happy(){
    return(
        <div className={styles.happy}>
            <h1>What our happy client say</h1>
                <p>Several selected clients, who already believe in our service.</p>
            <div className={styles.outdoor}>
                <div>
                    <img src={clientefeliz} width={389} alt="ERROR"></img>
                </div>
                <div>
                    <h2>Matthew Paul</h2>
                    <p>Perfect, very good job! Thank you for the amazing<br/> 
                    design and work. Really impressed with the high quality<br/>
                    and quick turnaround time. Highly recommend.</p>
                </div>
                <div>
                <img src={clientefelizTwo} width={348} alt="ERROR"></img>
                </div>
                
            </div>
        </div>
    )
}
export default Happy