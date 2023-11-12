import React, {useEffect} from "react";
import Routes from "./routes/routes";
import "./App.scss";
import {getFCP, getTTFB, getLCP, getFID} from 'web-vitals';

const App = () => {
    useEffect(() => {
        document.addEventListener("click", () => {
            getFID((metric) => {
                console.log("FID:", metric.value);
            });

            getLCP((metric) => {
                console.log("LCP:", metric.value);
            });
        });

        getTTFB((metric) => {
            console.log("TTFB:", metric.value);
        });

        getFCP((metric) => {
            console.log("FCP:", metric.value);
        })

    }, []);

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