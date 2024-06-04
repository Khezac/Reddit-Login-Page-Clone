import Logo from "../../../assets/Reddit-Logo.png"
import styles from "./style.module.css"

function Header() {
    return(
        <div className={styles.container}>
            <img className={styles.logo} src={Logo} alt="Reddit Logo" />
        </div>
    );
}

export default Header;