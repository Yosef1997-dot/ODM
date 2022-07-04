import styles from "./style.module.css"
import Clock from '../Clock'
import Logo from '../Logo'

export default function Header(){

    return(
        <header className={styles.header}>
            <Logo />
            <Clock />
        </header>
    )
}