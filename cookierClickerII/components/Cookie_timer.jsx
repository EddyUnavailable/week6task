import { use, useEffect, useState } from "react"
import { setInterval } from "timers/promises"



export default function Cookie_timer() {

    const [cookies, setCookies] = useState(100)

    useEffect(() => {
    const id = setInterval(() => {
        setCookies(cookies = cookies + 1);
    },1000)
    return () => {
        clearInterval(id)
    }
},[])

    return (
        <p>{cookies}</p>
    )
}