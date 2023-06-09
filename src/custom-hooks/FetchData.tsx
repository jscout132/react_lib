import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [bookData, setData] = useState<[]>([])

        async function handleDataFetch() {
            const result = await server_calls.get();
            setData(result) 
        }
        //useEffect on mount??
        useEffect(() => {
            handleDataFetch();
        }, [])
    return { bookData, getData:handleDataFetch }
}

// when writing a react hook, use goes at the beginning
// there are 11 hooks in react that come standard give or take
// useEffect is wonky
