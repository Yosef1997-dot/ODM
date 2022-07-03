import styles from "./style.module.css"

import Comparision from "./Comparision";

export default function Right({ idsCheckedList }) {

    if (idsCheckedList.length < 2) {
        return <div className={styles.right}>
            <div className={styles.before}>
                {/* <div> */}
                    Pick two Employees <br />
                    <strong>and see who</strong> <br />
                    <strong>earns the most</strong>
                {/* </div> */}
                {/* <div>Pick 2 Employees</div>
                <div><b>and see who</b></div>
                <div><b>earns the most</b></div> */}
            </div>
        </div>
    }
    else {
        return <Comparision idsCheckedList={idsCheckedList} />
    }
}