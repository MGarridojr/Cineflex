import { useParams } from "react-router-dom"

export default function Sessions(){
    const {movieID} = useParams()
    return(
        <>
        <p>retornou {movieID}</p>
        </>
    )

}