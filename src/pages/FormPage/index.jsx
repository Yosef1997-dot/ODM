import styles from "./style.module.css"
import axios from "axios";
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"


export default function Form() {

    // Location aloud you to get data from the previous page.
    // You should grab the state by the same name you gave him in the link
    const location = useLocation()
    const { userId } = location.state
    // Gets the details to fill up the form
    const [user, setUser] = useState({})
    // Makes the decision if message: Detsild updated will be visible or not 
    const [updateMsg, setUpdateMsg] = useState(false)

    function setUserDetails() {
        axios.get(`http://localhost:5000/edit/${userId}`)
            .then(res => setUser(res.data))
    }

    useEffect(() => {
        setUserDetails()
    }, [])

    function handleOnChange(e) {
        setUpdateMsg(false)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.put(`http://localhost:5000/update/${userId}`, user)
        setUpdateMsg(true)
    }

    return (
        <div className={styles.editForm}>
            <Link className={styles.backLink} to="/"> {`<Back`}</Link>
            <h1 className={styles.nameTitle}>{user.name}</h1>
            <h3 className={styles.editTitle}>Edit details</h3>
            <form onSubmit={handleSubmit} >

                <div className={styles.inputsContainer}>

                    <span className={styles.spanTitle} >Address</span>
                    <input className={styles.inp} type="text" name={"address"} value={user.address||''} onChange={(e) => handleOnChange(e)} required />

                    <span className={styles.spanTitle}>Phone</span>
                    <input className={styles.inp} type="text" name={"phone"} value={user.phone||''} onChange={(e) => handleOnChange(e)} required />

                    <span className={styles.spanTitle}>Email</span>
                    <input className={styles.inp} type="email" name={"email"} value={user.email||''} onChange={(e) => handleOnChange(e)} required />

                    <span className={styles.spanTitle}>Marital Status</span>
                    <select className={styles.inp} name={"maritalStatus"} id="" value={user.maritalStatus||''} onChange={(e) => handleOnChange(e)} required>
                        <option value="single">single</option>
                        <option value="married">married</option>
                        <option value="divorced">divorced</option>
                        <option value="other">other</option>
                    </select>

                    <span className={styles.spanTitle}>Gender</span>
                    <select className={styles.inp} name={"gender"} id="" value={user.gender||''} onChange={(e) => handleOnChange(e)} required>
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="prefer not to say">prefer not to say</option>
                    </select>

                </div>

                <div className={styles.buttonsContainer}>
                    <button className={styles.submitBtn} type="submit">Update</button>
                    <button type="button" className={styles.cancelBtn} onClick={() => setUserDetails()} >Cancel</button>
                </div>
                <p className={updateMsg ? styles.msgOn : styles.msgOff}>Details Updated</p>

            </form>
        </div>
    )
}