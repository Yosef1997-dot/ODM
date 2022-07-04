import styles from "./style.module.css"
import { Link } from "react-router-dom"
export default function Logo() {

    return (
        <Link to="/">
            <div className={styles.logo}>
            </div>
        </Link>

    )
}