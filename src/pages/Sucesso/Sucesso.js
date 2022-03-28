import { Link, useParams } from "react-router-dom"
import "./sucesso.css"
export default function Sucesso({route, navigation}) {
    route = useParams()
    const {title, day, hour, ticket, name, cpf } = route
    return (
        <>
            <body>
                <p className="receiptText">Pedido feito</p>
                <p className="receiptText">com sucesso!</p>
                <div className="receipt">
                    <article>
                        <p>Filme e sessão</p>
                        <div className="data">
                            <p>{title}</p>
                            <p>{day} {hour}</p>
                        </div>
                    </article>
                    <article>
                        <p>Ingressos</p>
                        <div className="data">
                            <p>{ticket}</p>
                        </div>
                    </article>
                    <article>
                        <p>Comprador</p>
                        <div className="data">
                            <p>{name}</p>
                            <p>{cpf}</p>
                        </div>
                    </article>
                </div>
                <Link style={{textDecoration: 'none'}}  to={"/"}>
                <div className="goButtons">
                    <button>Voltar para home</button>
                </div>
                </Link>
            </body>
        </>
    )
}