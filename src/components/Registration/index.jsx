const c = console.log.bind(document)

import "./style.scss"
import { useState, useEffect } from "react"
import classNames from "classnames"

const Registration = () => {

    //Zadaná data
    const initialData = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }
    const [user, setUser] = useState(initialData)

    //Delegace stavových hodnot do proměnných (pro zkrácení fuknčího kódu)
    let pass = user.password
    let passConfirm = user.passwordConfirm
    let name = user.username
    let email = user.email

    //V rámci kontroly správnosti hesla a e-mailu pro přidávání tříd
    const [passwordCheck, setPasswordCheck] = useState(true)
    const [emailCheck, setEmailCheck] = useState(true)

    //**********Hl. fce kontrolující validitu hodnot ve formuláři.**********//
    const handleSubmit = (e) => {
        e.preventDefault()

        //Kontrola validnost e-mailu (dle zadání stačí, že obsahuje "@")
        if(!email.includes("@")){ 
            setEmailCheck(false)
        } else {
            setEmailCheck(true)
        }
        
        //Kontrola shodnosti hesel a že se nejedná o prázdné hodnoty (dle zadání)
        if( pass !== passConfirm || !pass.trim().length > 0 || !passConfirm.trim().length > 0){
            setPasswordCheck(false)
            setUser({...user, password: "", passwordConfirm: ""})
        } else {
            setPasswordCheck(true)
        }

        //Pokud username prázdný při submitu (provedla se fce fillName, ale pak username smazal a znovu nešel do inputu pro e-mai.)
        //Tak se doplní hodnota před @
        //Tuto část jsem si přidal (resp. není dle zadání)
        if(name === ""){
            setUser({...user, username: email.slice(0, email.indexOf("@"))})
        }

    }

    //Pokud passwordCheck = true (resp. hesla se shodují) a emailCheck = true
    useEffect(() => {
        if(passwordCheck && emailCheck){
            c(user)
        }
    }, [passwordCheck, emailCheck])

    // Fce pro automatické vyplnění username, když e-mail obsahuje "@" a zároveň je username prázdné (dle zadání)
    const fillInName = () => {

        if(email.includes("@") && !name.trim().length > 0){
            setUser({...user, username: email.slice(0, email.indexOf("@")) })
        } 

    }

    return (
        <section>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <input onBlur={fillInName} className={!emailCheck ? "wrongInput" : "correctInput"} 
                value={user.email} 
                onChange={ e => setUser({...user, email: e.target.value})} 
                type="email" placeholder="Email address"/>
                
                <input value={user.username} 
                onChange={ e => setUser({...user, username: e.target.value})} 
                type="text" placeholder="User name"/>

                <input className={!passwordCheck ? "wrongInput" : "correctInput"} 
                value={user.password} 
                onChange={ e => setUser({...user, password: e.target.value})} 
                type="password" placeholder="Password"/>
                
                <input className={!passwordCheck ? "wrongInput" : "correctInput"} 
                value={user.passwordConfirm} 
                onChange={ e => setUser({...user, passwordConfirm: e.target.value})} 
                type="password" placeholder="Confirm password"/>  
        
                <button type="submit">Register</button>
            </form>
        </section>
    )
}

export default Registration