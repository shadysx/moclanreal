// FULL GITHUB
//https://github.com/WebDevSimplified/React-Firebase-Auth
import React, {useContext, useState, useEffect} from 'react'
// import {auth} from "../Firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        const auth = getAuth()
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(user => {
            setCurrentUser(user)

        return unsubscribe
    })

    }, [])

    const value = {
        currentUser,
        signup 
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}    
            </AuthContext.Provider> 
        </div>
    )
}
