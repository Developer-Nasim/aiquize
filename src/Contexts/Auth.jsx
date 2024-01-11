import { createContext, useContext, useEffect, useState } from 'react';
import '../Configs/Firebase.js'
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";  




const AuthContext  = createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState(null) 
    useEffect(() => {
        const auth = getAuth()
        const unsubs = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user) 
        })

        return unsubs
    },[])
    async function signIn() {
        const auth = getAuth()
        const provider = await new GoogleAuthProvider() 
        await signInWithPopup(auth, provider)
          .then((result) => { 
            setCurrentUser(result.user) 
        }).catch((error) => {
           console.log(error)
        }); 
        
    }
    function logOut() {
        const auth = getAuth()
        return signOut(auth)
    }
    const val = {
        currentUser,
        signIn,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={val}>
            {children}
        </AuthContext.Provider>
    )



} 