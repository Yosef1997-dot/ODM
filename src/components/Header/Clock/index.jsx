import styles from "./style.module.css"
import {useState} from 'react'

function currentDateAndTime(){

    let date  = new Date().toString().split(' '),
        month = date[1],
        day =  Number(date[2]),
        year = date[3],
        time = date[4],
        hour =Number(date[4].slice(0,2)),
        AMorPM =(hour>=12||hour===0) ? 'PM':'AM' ,
        timeZone = Number(date[5].slice(4,6)),
        dateAndTime = `${month} ${day}, ${year}, ${time} ${AMorPM} GMT +${timeZone} `

    return dateAndTime
}

export default function Clock() {

    setTimeout(function(){setClock(currentDateAndTime()) }, 1000);

    const [clock, setClock] = useState(false)

    return (
        <div className={styles.clock}>
            {`${clock}`}
        </div>
    )
}
