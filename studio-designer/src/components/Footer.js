import styles from '../components/Footer.module.css'

function Footer(){
    return(
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
    )
}
export default Footer