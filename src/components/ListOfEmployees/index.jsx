import styles from "./style.module.css"
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";


export default function ListOfEmployees({ setIdsCheckedList, idsCheckedList }) {

    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            // .then(res=>console.log(res))
            .then(res => setUsers(res.data))
    },[])

    // desides if checkbox can be checked 
    function handleChangeInput(e) {

        const userId = e.target.name
        if (e.target.checked) {
            e.target.checked = (idsCheckedList.length < 2) ? true : false;
            if (e.target.checked) {
                setIdsCheckedList(idsCheckedList => [...idsCheckedList, userId])
            }
        } else {
            if (idsCheckedList.length === 2) {
                let index = idsCheckedList.indexOf(userId)
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

                    {users?.map((user) => {
                        return (
                            <div key={user.id} className={`${styles.wrapIconAndInput}  ${(idsCheckedList.length === 2 & (idsCheckedList[0] !== user.id & idsCheckedList[1] !== user.id)) ? styles.lighter : ''}`}>
                                <label className={styles.container}>{user.name}
                                    <input type={'checkbox'} onChange={handleChangeInput} name={user.id} />
                                    <span className={styles.checkmark}><span></span></span>
                                </label>
                                <Link to="/edit" className={styles.link} state={{ userId: user.id }}> <span className={styles.editIcon}> <EditIcon className={styles.icon} /> Edit </span> </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}