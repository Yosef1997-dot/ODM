import styles from "./style.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
import Arrow from '../Arrow'
export default function Comparison({ idsCheckedList }) {

    const [comparedUsers, setComparedUsers] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5003/${idsCheckedList[0]}/${idsCheckedList[1]}`)
            .then(res => setComparedUsers(res.data))
    }, [])

    return (


            <div className={styles.afterComparing}>

                <div className={styles.title}>
                    <b>so...</b>
                    <b>Who earns the most?</b>
                </div>

                <div className={styles.comparison}>
                    <div className={`${styles.person} ${styles.one}`}>
                        <div className={styles.head} style={{ backgroundImage: ` linear-gradient(to bottom, white ${(comparedUsers[0]?.percentage) ? comparedUsers[0]?.percentage : 0}, rgba(0,0,0,0) ${(comparedUsers[0]?.percentage) ? comparedUsers[0].percentage : 0})` }} ></div>
                        <div className={styles.name}>{comparedUsers[0]?.name}</div>
                        <div className={styles.total}>${comparedUsers[0]?.salary.toLocaleString('en-US')}</div>
                        <div className={styles.difference}>{(comparedUsers[0]?.difference < 0) ? `-` : ``}${Math.abs(comparedUsers[0]?.difference).toLocaleString('en-US')}{(comparedUsers[0]?.difference < 0) ? <Arrow arrowColor={'#2F80ED'} direction={'down'} /> : <Arrow arrowColor={'#2F80ED'} direction={'up'} />}</div>
                    </div>

                    <div className={styles.middle}>
                        <div className={styles.head} ></div>
                        <div className={`${styles.name} ${styles.up}`}><b>Vs.</b></div>
                        <div className={`${styles.total} ${styles.titleMiddle}`}>Yearly income</div>
                        <div className={styles.difference}></div>
                    </div>

                    <div className={`${styles.person} ${styles.two} ${styles.low}`}>
                        <div className={styles.head} style={{ backgroundImage: ` linear-gradient(to bottom, white ${(comparedUsers[1]?.percentage) ? comparedUsers[1]?.percentage : 0}, rgba(0,0,0,0) ${(comparedUsers[1]?.percentage) ? comparedUsers[1].percentage : 0})` }} ></div>
                        <div className={styles.name}>{comparedUsers[1]?.name}</div>
                        <div className={styles.total}>${comparedUsers[1]?.salary.toLocaleString('en-US')}</div>
                        <div className={styles.difference}>{(comparedUsers[1]?.difference < 0) ? `-` : ``}${Math.abs(comparedUsers[1]?.difference).toLocaleString('en-US')}{(comparedUsers[1]?.difference < 0) ? <Arrow arrowColor={'#F2994A'} direction={'down'} /> : <Arrow arrowColor={'#F2994A'} direction={'up'} />}</div>

                    </div>

                </div>


            </div>

    )
}