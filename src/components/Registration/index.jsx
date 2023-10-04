const c = console.log.bind(document)

import "./style.scss"
import { useState, useEffect } from "react"
import classNames from "classnames"

const Registration = () => {

    //Originální data
    const initialData = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }

    //Zadání ori. dat do stavu
    const [user, setUser] = useState(initialData)

    //Destrukturalizace proměnných
    const {username, email, password, passwordConfirm} = user

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
        if( password !== passwordConfirm || !password.trim().length > 0 || !passwordConfirm.trim().length > 0){
            setPasswordCheck(false)

            setTimeout(() => {
                setUser({...user, password: "", passwordConfirm: ""})
            }, 0)
        } else {
            setPasswordCheck(true)
        }

        //Pokud username prázdný při submitu (provedla se fce fillName, ale pak username smazal a znovu nešel do inputu pro e-mai.)
        //Tak se doplní hodnota před @ a při odeslání formu nebude username nikdy prázdný. Proto se pro daný input nepřidává třída wrongInput
        //Tuto část jsem si přidal (resp. není dle zadání)
        if(username === ""){
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

        if(email.includes("@") && !username.trim().length > 0){
            setUser({...user, username: email.slice(0, email.indexOf("@")) })
        } 

    }

    return (
        <section>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <input onBlur={fillInName} className={!emailCheck ? "wrongInput" : "correctInput"} 
                value={email} 
                onChange={ e => setUser({...user, email: e.target.value})} 
                type="email" placeholder="Email address"/>
                
                <input value={username}
                onChange={ e => setUser({...user, username: e.target.value})} 
                type="text" placeholder="User name"/>

                <input className={!passwordCheck ? "wrongInput" : "correctInput"} 
                value={password} 
                onChange={ e => setUser({...user, password: e.target.value})} 
                type="password" placeholder="Password"/>
                
                <input className={!passwordCheck ? "wrongInput" : "correctInput"} 
                value={passwordConfirm} 
                onChange={ e => setUser({...user, passwordConfirm: e.target.value})} 
                type="password" placeholder="Confirm password"/>  
        
                <button type="submit">Register</button>
            </form>
        </section>
    )
}

export default Registration