import styles from "./style.module.css"
import Right from './Right'
import Left from "./Left"
import { useState } from "react"





export default function Main() {
    const [compareOrNot, setCompareOrNot] = useState(false)
    const [employees, setEmployees] = useState([])


    return (
        <div className={styles.main}>
            <Left setEmployees = {setEmployees} employees={employees} setCompareOrNot={setCompareOrNot} />
            <Right employees={employees} compareOrNot ={compareOrNot}/>
         
        </div>

    )
}