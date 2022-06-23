import styles from "./style.module.css"
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';







export default function Left({ setEmployees, employees }) {

    const [howManyChecked, setHowManyChecked] = useState([])
    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(res => {
                setUsers(res.data)
            })
            
    }, [])


    function handleChangeInput(e) {

        if (e.target.checked) {
            e.target.checked = (howManyChecked.length < 2) ? true : false;
            if (e.target.checked) {
                const Salary = users.filter(user => user.Name === e.target.name)[0].Salary
                setHowManyChecked(howManyChecked => [...howManyChecked, 'true'])
                setEmployees(employees => [...employees, { name: e.target.name, salary: Salary }])
            }
        } else {
            if (howManyChecked.length === 2) {
                setHowManyChecked([...howManyChecked.slice(1)])
                // const leftUser = employees.filter(user => user.name !== e.target.name)[0]
                // setEmployees([leftUser])
                setEmployees(employees.filter(user => user.name !== e.target.name))
            } else {
                setHowManyChecked([])
                setEmployees([])
            }


        }



        return;
    }

    return (
        <div className={styles.left}>
            <div className={styles.OptionsWrapper}>
                <div className={styles.listOfNames}>

                    {users?.map((user) => {
                        return <div className={`${styles.wrapIconAndInput}  ${(employees.length===2&(employees[0]?.name!== user.Name&employees[1]?.name!== user.Name))? styles.lighter: ''}`}>
                            <label className={styles.container}>{user.Name}
                                <input type={'checkbox'} onChange={handleChangeInput} name={user.Name} />
                                <span className={styles.checkmark}><span></span></span>
                            </label>
                            
                            {/* <span className={styles.editIcon}> <EditIcon className={styles.icon} /> Edit </span> */}
                            {/* <span className={styles.editIcon}> <EditIcon className={styles.icon} /> Edit </span> */}
                            {/* <span className={styles.icon}> <Link to="/edit" > <EditIcon  /> Edit </Link></span> */}
                            <Link to="/edit" className={styles.link} state={{userDetails: user}}> <span className={styles.editIcon}> <EditIcon className={styles.icon} /> Edit </span> </Link>
                            
                            
                        </div>

                    })}

                </div>
            </div>
        </div>
    )
}