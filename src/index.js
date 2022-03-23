import ReactDOM from "react-dom";
import "./style/reset.css"
import Header from "./componentes/Header/Header";
import Movies from "./pages/Movies/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sessions from "./pages/Sessions/Sessions";

function App() {
    return (
        <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/sessions/:movieID" element={<Sessions/>}/> 
        </Routes>
        </BrowserRouter>
        </>


    )
}

ReactDOM.render(<App />, document.querySelector(".root"))
