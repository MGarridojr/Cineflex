import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../componentes/Footer/Footer";
import Seat from "../../componentes/Seat";
import "./seats.css"


export default function Seats() {
    const navigate = useNavigate()
    const { sessionID } = useParams()
    const [session, setSession] = useState([])
    const [reserveSeat, setreserveSeat] = useState({
        ids: [],
        names:[]
    })
    const [userName, setUserName] = useState("")
    const [cpf, setCpf] = useState("")
    const postObject = {
        ids: reserveSeat.ids,
        name: userName,
        cpf: cpf
    }
    const handleClick = (add, id, name) => {
        if (add == true) {
            setreserveSeat({ ids: [...reserveSeat.ids, id],
                names:[...reserveSeat.names, name] })
        }
        else {
            setreserveSeat({
                ids: reserveSeat.ids.filter((idFilter) => {
                    return id != idFilter
                }),
                names: reserveSeat.ids.filter((idFilter) => {
                    return id != idFilter
                })
            })
        }
    }
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`)
            .then((response) => {
                setSession(response.data)
            })

            .catch((error) => {
                console.log(error)
            })

    })
    const { name, day, movie, seats, id } = session
    return (
        <>
            <p>Selecione o(s) assento(s)</p>
            <section>
                <div className="seats">

                    {id > 0 ? seats.map((seat) => {
                        return (
                            <Seat seat={seat} handleClick={handleClick} />

                        )
                    })
                        : <>
                            <p>Carregando...</p>
                        </>
                    }
                </div>
                <div className="subtitle">
                    <div className="subtitleCard">
                        <div className="seat select">
                        </div>
                        <p>Selecionado</p>
                    </div>
                    <div className="subtitleCard">
                        <div className="seat available">
                        </div>
                        <p>Dispon??vel</p>
                    </div>
                    <div className="subtitleCard">
                        <div className="seat unavailable">
                        </div>
                        <p>Indispon??vel</p>
                    </div>
                </div>
                <form onSubmit={sendReservation}>
                    <div className="personalInfo">
                        <label for="name">Nome do comprador:</label>
                        <input placeholder="Digite Seu nome..." id="name" required type={"text"} onChange={(info) => {
                            setUserName(info.target.value)
                        }}></input>
                    </div>
                    <div className="personalInfo">
                        <label for="cpf">CPF do comprador:</label>
                        <input placeholder="Digite Seu CPF..." id="cpf" required onChange={(info) => {
                            setCpf(info.target.value)
                        }}></input>
                    </div>
                    <div className="goButtons">

                        <button type="submit">Reservar assento(s)</button>
                    </div>
                </form>
            </section>
            {id > 0 ? <Footer titulo={movie.title} url={movie.posterURL} data={day.weekday} horario={name} />
                : <></>}
        </>
    )
    function sendReservation(event) {
        event.preventDefault();

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", postObject)
            .then(() => {
                navigate("/sucesso", {state:{
                    cpf: cpf,
                    name: userName,
                    title: movie.title,
                    day: day.weekday,
                    hour: name,
                    ticket: reserveSeat.names
                }})
            })
            .catch((error) => console.log(error))
    }



}