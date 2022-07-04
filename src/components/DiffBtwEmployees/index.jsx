import styles from "./style.module.css"

import Comparison from "../Comparison";

export default function DiffBtwEmployees({ idsCheckedList }) {

    if (idsCheckedList.length < 2) {
        return <div className={styles.right}>
            <div className={styles.before}>
                    Pick two Employees <br />
                    <strong>and see who</strong> <br />
                    <strong>earns the most</strong>
            </div>
        </div>
    }
    else {
        return <Comparison idsCheckedList={idsCheckedList} />
    }
}