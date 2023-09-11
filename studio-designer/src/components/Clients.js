import styles from '../components/Clients.module.css'
import google from '../images/google.svg'
import airbnb from '../images/airbnb.svg'
import amazon from '../images/amazon.svg'
import ubereats from '../images/ubereats.svg'


function Clients(){
    return(
        <div className={styles.clients}>
            <h2>Our Client</h2>
           <ul>
                <li>
                    <p>Several selected clients, who already<br/>
                       believe in our service.</p>
                </li>
                <li>
                    <img src={google} width={150}></img>
                </li>
                <li>
                    <img src={airbnb} width={150}></img>
                </li>
                <li>
                    <img src={ubereats} width={150}></img>
                </li>
                <li>
                    <img src={amazon} width={130}></img>
                </li>
           </ul>
        </div>
    )
}
export default Clients