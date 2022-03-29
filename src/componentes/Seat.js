import { useState } from "react/cjs/react.development"

export default function Seat(props) {

    const [select, setSelect] = useState()
    const{seat, handleClick} = props
    const chossenSeat = (seat)=>{
        if(seat.isAvailable == true){
            handleClick(true, seat.id, seat.name)
            setSelect(true) 
        }else{
          alert("Esse assento não está disponível")    
        }
        if(select == true){
            handleClick(false, seat.id, seat.name)
            setSelect(false)
        }
        }
    return(
        <div className={!seat.isAvailable ? "seat unavailable" : (select? "seat select" : "seat available")} onClick={() => {chossenSeat(seat)}}>
        {seat.name}
    </div>
        )
}
