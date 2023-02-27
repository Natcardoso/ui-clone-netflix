import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CurrentMovieProvider } from "./context/movieCurrent";
import { GlobalStyles } from "./globalStyles";
import { Router } from "./router";

function App() {
    return (
        <CurrentMovieProvider>
            <BrowserRouter>
                <GlobalStyles />
                <Router />
            </BrowserRouter>
        </CurrentMovieProvider>
    );
}

export default App;
