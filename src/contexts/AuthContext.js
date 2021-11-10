import React, {useContext, useEffect, useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth" 


export const AuthContext = React.createContext()

export function useAuth() {
        return useContext(AuthContext)
    }

function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const auth = getAuth() //Auth

    function signup (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)

            if (user){
                console.log("online")
            }
            else {
                console.log("offline")
            }
        })   
    }, [])

    const value = {
        currentUser,
        signup,
        login,
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
