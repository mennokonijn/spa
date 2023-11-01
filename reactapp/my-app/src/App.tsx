import React from "react";
import Routes from "./routes/routes";
import "./App.scss";

const App = () => {
    return (
        <div className="container">
            <div className="navbar-container">
                <nav className="navbar-container__navbar">
                    <ul className="navbar-container__nav-list">
                        <li className="navbar-container__nav-item"><a href="/users">Users</a></li>
                        <li className="navbar-container__nav-item"><a href="/tasks">Tasks</a></li>
                    </ul>
                </nav>
            </div>
            <div className="scrollable-content">
                <Routes />
            </div>
        </div>
    );
}

export default App