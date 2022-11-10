import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} -Dr. Smith`
    }, [title])
}

export default useTitle;