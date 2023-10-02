const c = console.log.bind(document)

import "./style.scss"
import { useState } from "react"

const Registration = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    return (
        <section>
            <form id="registrationForm">
                <input type="text" placeholder="Email address"/>
                <input type="text" placeholder="User name"/>
                <input type="text" placeholder="Password"/>
                <input type="text" placeholder="Confirm password"/>
                <button type="submit">Register</button>
            </form>
        </section>
    )
}

export default Registration