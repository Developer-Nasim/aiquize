import { Navigate } from "react-router-dom"
import { useAuth } from "../Contexts/Auth"

// Protect the dashboard pages
export  function PrivateRoute({element}) {
    const {currentUser} = useAuth() 
    return (
        currentUser ? element : <Navigate to={'/join'}/> 
    )
}
// Protect the Login Page
export function ProtectLogin({element}) {
    const {currentUser} = useAuth() 
    return (
        currentUser ? <Navigate to={'/profile'}/> : element
    )
}