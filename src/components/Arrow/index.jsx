import styles from "./style.module.css"

export default function Arrow({ direction, arrowColor }) {
    if (direction === 'up') {
        return <div className={styles.arrow_up} style={{ borderBottom: `13px solid ${arrowColor}` }}></div>
    } else {
        return <div className={styles.arrow_up} style={{ borderTop: `13px solid ${arrowColor}` }}></div>
    }
}
