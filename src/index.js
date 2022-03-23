import ReactDOM from "react-dom";
import "./style/reset.css"
import Header from "./componentes/Header/Header";

function App() {
    return (
        <div>
            <Header />
        </div>


    )
}

ReactDOM.render(<App />, document.querySelector(".root"))
