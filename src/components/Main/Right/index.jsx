import styles from "./style.module.css"
import { useState, useEffect } from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Right({ employees }) {

    const [firstSalary, setFirstSalary] = useState()
    const [secondSalary, setSecondSalary] = useState()
    const [percentage, setPercentage] = useState()

    useEffect(() => {
        if (employees.length === 2) {
            setFirstSalary(employees[0].salary)
            setSecondSalary(employees[1].salary)
            setPercentage(`${100 * ((Math.max(firstSalary, secondSalary) - Math.min(firstSalary, secondSalary)) / Math.max(firstSalary, secondSalary))}%`)
        }
    })

    if (employees.length < 2) {
        return <div className={styles.right}>
            <div className={styles.before}>
                <div>Pick 2 Employees</div>
                <div><b>and see who</b></div>
                <div><b>earns the most</b></div>
            </div>
        </div>
    } else {
        return <div className={styles.right}>

            <div className={styles.after}>

                <div className={styles.title}>
                    <b>so...</b>
                    <b>Who earns the most?</b>
                </div>

                <div className={styles.comparison}>
                    <div className={`${styles.person} ${styles.one}`}>
                        <div className={styles.head} style={{ backgroundImage: ` linear-gradient(to bottom, white ${(firstSalary<secondSalary)?percentage:0}, rgba(0,0,0,0) ${(firstSalary<secondSalary)?percentage:0})` }} ></div>
                        <div className={styles.name}>{employees[0].name}</div>
                        <div className={styles.total}>${employees[0].salary.toLocaleString('en-US')}</div>
                        <div className={styles.difference}>{(firstSalary - secondSalary<0)?`-`:``}${Math.abs(firstSalary - secondSalary).toLocaleString('en-US')}{(firstSalary - secondSalary < 0) ? <ArrowDropDownIcon sx={{ color: '#2F80ED' }} /> : <ArrowDropUpIcon sx={{ color: '#2F80ED' }} />}</div>
                    </div>

                    <div className={styles.middle}>
                        <div className={styles.head} ></div>
                        <div className={`${styles.name} ${styles.up}`}><b>Vs.</b></div>
                        <div className={styles.total}>Yearly income</div>
                        <div className={styles.difference}></div>
                    </div>

                    <div className={`${styles.person} ${styles.two} ${styles.low}`}>
                        <div className={styles.head} style={{ backgroundImage: ` linear-gradient(to bottom, white ${(secondSalary<firstSalary)?percentage:0}, rgba(0,0,0,0) ${(secondSalary<firstSalary)?percentage:0})` }}></div>
                        <div className={styles.name}>{employees[1].name}</div>
                        <div className={styles.total}>${employees[1].salary.toLocaleString('en-US')}</div>
                        <div className={styles.difference}>{(secondSalary - firstSalary<0)?`-`:``}${Math.abs(secondSalary - firstSalary).toLocaleString('en-US')}{(secondSalary - firstSalary < 0) ? <ArrowDropDownIcon sx={{ color: '#F2994A' }} /> : <ArrowDropUpIcon sx={{ color: '#F2994A' }} />}</div>
                    </div>

                </div>


            </div>
        </div>
    }





}