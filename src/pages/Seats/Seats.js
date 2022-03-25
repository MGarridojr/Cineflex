import { useParams } from "react-router-dom";


export default function Seats(){
    const {sessionID} = useParams()
    return(
        <>
        <p>o ID é{sessionID}</p>
        </>
    )
    

}