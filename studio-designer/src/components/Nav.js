import styles from '../components/Nav.module.css'
import Logo from '../images/Logo.svg'

function Nav(){
    return(
        <div>
            <div className={styles.logo}>
                <ul>
                    <li>
                        <img src={Logo}></img>
                    </li>
                </ul>
            <div className={styles.nav}>
                <ul>
                    <li></li>
                    <li>Home</li>
                    <li>What We Do</li>
                    <li>Service</li>
                    <li>Project</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
export default Nav