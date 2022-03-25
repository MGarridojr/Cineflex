import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Footer from "../../componentes/Footer/Footer"
import "./sessions.css"

export default function Sessions(){
    const {movieID} = useParams()
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`)
            .then((response) => {
                setMovie(response.data)
                
            }
            )
            .catch((error) => {
                console.log(error)
                
            })
        }, []
        )
        const {title, posterUrl, days} = movie
    return(
        <div className="page">
        <p>Selecione o Horário</p>
        {movie.id>0 ? days.map((day =>  {
            return(
                <div className="date">
                    <p>{day.weekday} {day.date}</p>
                    <div className="time">
                        {day.showtimes.map((showtime => {
                            return(
                                <Link style={{textDecoration: 'none'}} to={`/seats/${showtime.id}`}>
                                    <button>{showtime.name}</button> 
                                </Link>
                            )   
                        }))
                    }
                    </div>
                </div>
            )
        }))
        : <>
            <p>Carregando...</p> {/* adicionar gif de loading */}
        </>}
        <Footer url={movie.posterURL} titulo={movie.title} />
        </div>
    )

}