import styles from "./style.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
import Arrow from '../Arrow'
export default function Comparison({ idsCheckedList }) {

    const [compareEmployees, setCompareEmployees] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/${idsCheckedList[0]}/${idsCheckedList[1]}`)
            .then(res => setCompareEmployees(res.data))
    }, [])

    return (


            <div className={styles.afterComparing}>

                <div className={styles.title}>
                    <b>so...</b>
                    <b>Who earns the most?</b>
                </div>

                <div className={styles.comparison}>
                    <div className={`${styles.person} ${styles.one}`}>
                        <div className={styles.head} style={{ backgroundImage: ` linear-gradient(to bottom, white ${(compareEmployees[0]?.percentage) ? compareEmployees[0]?.percentage : 0}, rgba(0,0,0,0) ${(compareEmployees[0]?.percentage) ? compareEmployees[0].percentage : 0})` }} ></div>
                        <div className={styles.name}>{compareEmployees[0]?.name}</div>
                        <div className={styles.total}>${compareEmployees[0]?.salary.toLocaleString('en-US')}</div>
                        <div className={styles.difference}>{(compareEmployees[0]?.difference < 0) ? `-` : ``}${Math.abs(compareEmployees[0]?.difference).toLocaleString('en-US')}{(compareEmployees[0]?.difference < 0) ? <Arrow arrowColor={'#2F80ED'} direction={'down'} /> : (compareEmployees[0]?.difference > 0)? <Arrow arrowColor={'#2F80ED'} direction={'up'} />:''}</div>
                    </div>

                    <div className={styles.middle}>
                        <div className={styles.head} ></div>
                        <div className={`${styles.name} ${styles.up}`}><b>Vs.</b></div>
                        <div className={`${styles.total} ${styles.titleMiddle}`}>Yearly income</div>
                        <div className={styles.difference}></div>
                    </div>

                    <div className={`${styles.person} ${styles.two} ${styles.low}`}>
                        <div className={styles.head} style={{ backgroundImage: ` linear-gradient(to bottom, white ${(compareEmployees[1]?.percentage) ? compareEmployees[1]?.percentage : 0}, rgba(0,0,0,0) ${(compareEmployees[1]?.percentage) ? compareEmployees[1].percentage : 0})` }} ></div>
                        <div className={styles.name}>{compareEmployees[1]?.name}</div>
                        <div className={styles.total}>${compareEmployees[1]?.salary.toLocaleString('en-US')}</div>
                        <div className={styles.difference}>{(compareEmployees[1]?.difference < 0) ? `-` : ``}${Math.abs(compareEmployees[1]?.difference).toLocaleString('en-US')}{(compareEmployees[1]?.difference < 0) ? <Arrow arrowColor={'#F2994A'} direction={'down'} /> : (compareEmployees[1]?.difference > 0)? <Arrow arrowColor={'#F2994A'} direction={'up'} />:''}</div>

                    </div>

                </div>


            </div>

    )
}