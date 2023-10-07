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

    //
    const [validationCheck, setValidationCheck] = useState({
        passwordCheck: true,
        emailCheck: true,
        nameCheck: true,
    })
    const {passwordCheck, emailCheck, nameCheck} = validationCheck

    //**********Hl. fce kontrolující validitu hodnot ve formuláři.**********//
    const handleSubmit = (e) => {
        e.preventDefault()

        //Kontrola validnost e-mailu (dle zadání stačí, že obsahuje "@")
        if(!email.includes("@") || !email.trim().length > 0){ 
            setValidationCheck( prev => ({...prev, emailCheck: false}) )
        } else {
            setValidationCheck(prev => ({...prev, emailCheck: true}) )
        }
        
        //Kontrola prázdnosti inputu pro username
        if( !username.trim().length > 0 && email.includes("@") ){
            c("Funguje to?")
            setUser( {...user, username: email.slice(0, email.indexOf("@"))} )
            setValidationCheck(prev => ({...prev, nameCheck: true}) )
            
        } else if( !username.trim().length > 0 ){
            setValidationCheck(prev => ({...prev, nameCheck: false}) )
        } 
        else {
            setValidationCheck(prev => ({...prev, nameCheck: true}) )
        }
        
        //Kontrola shodnosti hesel a že se nejedná o prázdné hodnoty (dle zadání)
        if( password !== passwordConfirm || !password.trim().length > 0 || !passwordConfirm.trim().length > 0){

            setValidationCheck(prev => ({...prev, passwordCheck: false}))
            setUser(prev => ({...prev, password: "", passwordConfirm: ""}))

        } else {
            setValidationCheck(prev => ({...prev, passwordCheck: true}))
        }

    }

    //Výpis stavu "user"
    useEffect(() => {
            c(user)
    }, [validationCheck]) 

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
                
                <input value={username} className={!nameCheck ? "wrongInput" : "correctInput"} 
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