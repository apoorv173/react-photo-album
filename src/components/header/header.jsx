import React from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

export const Header = () => {
    return (
        <nav className="navbar">
            <header className="App-header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                </div>
            </header>
        </nav>
    )
}
export default Header;