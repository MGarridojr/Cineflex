import ReactDOM from "react-dom";
import "./style/reset.css"
import Header from "./componentes/Header/Header";
import Movies from "./pages/Movies/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sessions from "./pages/Sessions/Sessions";
import Seats from "./pages/Seats/Seats";
import Sucesso from "./pages/Sucesso/Sucesso";

function App() {
    return (
        <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/sessions/:movieID" element={<Sessions/>}/> 
            <Route path="/seats/:sessionID" element={<Seats />} />
            <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
        </BrowserRouter>
        </>


    )
}

ReactDOM.render(<App />, document.querySelector(".root"))
