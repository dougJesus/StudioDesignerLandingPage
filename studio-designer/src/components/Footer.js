import styles from '../components/Footer.module.css'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'

function Footer(){
    return(
        <div>
            <div className={styles.footer}>
            <ul>What We Do
                <li>Web Design </li>
                <li>App Design</li>
                <li>Social Media Manage</li>
                <li>Market Analysis Project</li>
            </ul>
            <ul>Company
                <li>About Us</li>       
                <li>Career</li>
                <li>Become Investor</li>
            </ul> 
            <ul>Support
                <li>FAQ</li>   
                <li>Policy</li>
                <li>Business</li>
            </ul> 
            <ul>Contact
                <li>WhatsApp</li>
                <li>Support 24</li>
            </ul>    
            </div>
            <div className={styles.redes}>
                <img src={facebook}></img>
                <img src={twitter}></img>
                <img src={linkedin}></img>
            </div>
            <div className={styles.text}>
                <p>Copyright © 2023 Douglas Jesus</p>
            </div>
        </div>
        
    )
}
export default Footer