import "./footer.css"
export default function Footer(props) {
    const { url, titulo, data, horario } = props;
    return (
        <footer>
            <div className="poster">
                <img src={url} />
            </div>
            <div className="info">
                <p>{titulo}</p>
                {data ? <p>{data}-{horario}</p>
                    : ""}
            </div>
        </footer>
    )
}