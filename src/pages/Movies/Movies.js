import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./movies.css"

function Movies() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
            .then((response) => {
                setMovies(response.data)

            }
            )
            .catch((error) => {
                console.log(error)

            })
    }, []
    )
    return (
        <>
            <p>Selecione o filme</p>
            <div className="posters">
                {movies.map((movie) => {
                    return (
                        <Link to={`/sessions/${movie.id}`}>
                            <div className="poster">
                                <img src={movie.posterURL} />
                            </div>
                        </Link>
                    )
                }
                )
                }
            </div>
        </>

    )
}
export default Movies