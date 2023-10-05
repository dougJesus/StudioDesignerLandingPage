import styles from '../components/Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
                    <img src="" alt="ERROR"></img>
                    <p>Leading digital agency with solid design <br/> and development expertise. We build <br/>readymade websites, mobile applications,<br/> and elaborate online business services.</p>
                    <div className={styles.rodape}>
                        <ul>What We Do</ul>
                            <li>Web Design</li>
                            <li>App Design</li>    
                            <li>Social Media Manage</li>    
                            <li> Market Analysis Project</li>   
                        <ul>Company</ul>
                            <li>About Us</li>
                            <li>Career</li>
                            <li>Become Investor</li>
                        <ul>Support</ul>
                            <li>FAQ</li>
                            <li>Policy</li>
                            <li>Business</li>
                        <ul>Contact</ul>
                            <li>WhatsApp</li>
                            <li>Support 24</li>
                    </div>
                    
                </div>
           
    )
}
export default Footer