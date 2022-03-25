import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../componentes/Footer/Footer";
import "./seats.css"


export default function Seats() {
    const { sessionID } = useParams()
    const [session, setSession] = useState([])
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
                            <div className="seat available">
                                {seat.name}
                            </div>
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
                        <p>Disponível</p>
                    </div>
                    <div className="subtitleCard">
                        <div className="seat unavailable">
                        </div>
                        <p>Indisponível</p>
                    </div>
                </div>
            </section>
                <div className="personalInfo">
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite Seu nome..."></input>
                </div>
                <div className="personalInfo">
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite Seu CPF..."></input>
                </div>
                <div className="goButtons">

                <button>Reservar assento(s)</button>
                </div>
                {id>0 ? <Footer titulo={movie.title} url={movie.posterURL} data={day.weekday} horario={name}/>
                : <></>}
        </>
    )


}