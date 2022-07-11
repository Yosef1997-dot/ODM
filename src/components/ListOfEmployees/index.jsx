import styles from "./style.module.css"
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";


export default function ListOfEmployees({ setIdsCheckedList, idsCheckedList }) {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/employees')
            // .then(res=>console.log(res))
            .then(res => setEmployees(res.data))
    },[])

    // desides if checkbox can be checked 
    function handleChangeInput(e) {

        const employeeId = e.target.name
        if (e.target.checked) {
            e.target.checked = (idsCheckedList.length < 2) ? true : false;
            if (e.target.checked) {
                setIdsCheckedList(idsCheckedList => [...idsCheckedList, employeeId])
            }
        } else {
            if (idsCheckedList.length === 2) {
                let index = idsCheckedList.indexOf(employeeId)
                index = (index===0)?  1:0
                setIdsCheckedList([idsCheckedList[index]])
            } else {
                setIdsCheckedList([])
            }
        }
        return;
    }

    return (
        <div className={styles.left}>
            <div className={styles.OptionsWrapper}>
                <div className={styles.listOfNames}>

                    {employees?.map((employee) => {
                        return (
                            <div key={employee.id} className={`${styles.wrapIconAndInput}  ${(idsCheckedList.length === 2 & (idsCheckedList[0] !== employee.id & idsCheckedList[1] !== employee.id)) ? styles.lighter : ''}`}>
                                <label className={styles.container}>{employee.name}
                                    <input type={'checkbox'} onChange={handleChangeInput} name={employee.id} />
                                    <span className={styles.checkmark}><span></span></span>
                                </label>
                                <Link to="/edit" className={styles.link} state={{ employeeId: employee.id }}> <span className={styles.editIcon}> <EditIcon className={styles.icon} /> Edit </span> </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}