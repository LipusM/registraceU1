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

    const [passwordCheck, setPasswordCheck] = useState(true)
    const [emailCheck, setEmailCheck] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()

        /* if(!user.email.includes("@")){
            setEmailCheck(false)
        } else {
            setEmailCheck(true)
        } */
        
        if(user.password !== user.passwordConfirm || (user.password === "" || user.passwordConfirm === "")){
            setPasswordCheck(false)
            setUser({...user, password: "", passwordConfirm: ""})
        } else {
            setPasswordCheck(true)
        }
    }

    // Funkce pro automatické vyplnění username, když e-mail obsahuje "@" a zároveň je username prázdné
    const fillInName = () => {

        let userName = ""

        if(user.email.includes("@") && user.username === ""){
            userName = user.email.slice(0, user.email.indexOf("@"))
            setUser({...user, username: userName})
        } 
    }

    return (
        <section>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <input onBlur={fillInName} className={!emailCheck ? "wrongInput" : "correctInput"} value={user.email} 
                onChange={ e => setUser({...user, email: e.target.value})} 
                type="text" placeholder="Email address"/>
                
                <input value={user.username} 
                onChange={ e => setUser({...user, username: e.target.value})} 
                type="text" placeholder="User name"/>

                <input className={!passwordCheck ? "wrongInput" : "correctInput"} value={user.password} 
                onChange={ e => setUser({...user, password: e.target.value})} 
                type="password" placeholder="Password"/>
                
                <input className={!passwordCheck ? "wrongInput" : "correctInput"} value={user.passwordConfirm} 
                onChange={ e => setUser({...user, passwordConfirm: e.target.value})} 
                type="password" placeholder="Confirm password"/>  
        
                <button type="submit">Register</button>
            </form>
        </section>
    )
}

export default Registration