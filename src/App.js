import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";

function App() {
    return (
        <div className="App">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="landing">
                <Landing />
            </div>
        </div>
    );
}

export default App;
