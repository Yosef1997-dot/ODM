import styles from "./style.module.css"
import { useState } from "react"


import axios from "axios";


import { Link, useLocation } from "react-router-dom"
// import { display } from "@mui/system";

export default function Form() {

    const location = useLocation()
    const { userDetails } = location.state


    const [user, setUser] = useState(userDetails)
    const [updateMsg, setUpdateMsg] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        axios.put('http://localhost:3000/edit', user)
        setUpdateMsg(true)
        // return console.log(e.target)
    }


    function handleOnChange(e) {
setUpdateMsg(false)
        setUser({ ...user, [e.target.name]: e.target.value })
    }





    return (
        <form onSubmit={handleSubmit} className={styles.editForm}>
            <Link className={styles.backLink} to="/"> {`<Back`}</Link>
            <h1 className={styles.nameTitle}>{user.Name}</h1>
            <h3 className={styles.editTitle}>Edit details</h3>
            <div className={styles.inputsContainer}>
                <span className={styles.spanTitle} >Address</span>
                <input className={styles.inp} type="text" name={"Address"} value={user.Address} onChange={(e) => handleOnChange(e)} required />

                <span className={styles.spanTitle}>Phone</span>
                <input className={styles.inp} type="text" name={"Phone"} value={user.Phone} onChange={(e) => handleOnChange(e)} required />

                <span className={styles.spanTitle}>Email</span>
                <input className={styles.inp} type="email" name={"Email"} value={user.Email} onChange={(e) => handleOnChange(e)} required />

                <span className={styles.spanTitle}>Marrital Status</span>
                <select className={styles.inp} name={"MaritalStatus"} id="" value={user.MaritalStatus} onChange={(e) => handleOnChange(e)} required>
                    <option value="single">single</option>
                    <option value="married">married</option>
                    <option value="divorced">divorced</option>
                    <option value="other">other</option>
                </select>

                <span className={styles.spanTitle}>Gender</span>
                <select className={styles.inp} name={"Gender"} id="" value={user.Gender} onChange={(e) => handleOnChange(e)} required>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="prefer not to say">prefer not to say</option>
                </select>
            </div>
            <div className={styles.buttonsContainer}>
                <button className={styles.submitBtn} type="submit">Update</button>
                <Link to="/">
                    <button className={styles.cancelBtn} >Cancel</button>
                </Link>
            </div>
            <p className={updateMsg?styles.msgOn:styles.msgOff}>Details Updated</p>

        </form>
    )
}