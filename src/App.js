import React from "react";
import './styles/App.css';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import AppRouter from "./components/AppRouter";


function App() {
    return (<BrowserRouter>
            <AppRouter/>
        </BrowserRouter>

    )

}

export default App;
