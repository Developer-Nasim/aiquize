import { createContext, useContext, useEffect, useState } from "react";


const LocalQContext = createContext()
export function useLocalQuize() {
    return useContext(LocalQContext)
}


export default function QuizeFromLocalStorage({children}) {
    const [quize,setQuize] = useState(null) 

    function updateData() {
        const quize = JSON.parse(localStorage.getItem('quizes'))
        setQuize(quize) 
    }
    useEffect(()=>{
        updateData()
    },[])



    const val = {
        quize, 
        updateData
    }

    return (
        <LocalQContext.Provider value={val}>
            {children}
        </LocalQContext.Provider>
    )
}