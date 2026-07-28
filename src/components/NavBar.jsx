import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/navbar.css'

export default function NavBar({ searchTerm, onSearchChange }) {
    return (
        <div className="my_navbar">
            <div className="navbar-links">
                <Link className="link" to="/Home">Home</Link>
                <Link className="link" to="/editing">Editing</Link>
                <Link className="link" to="/about">AboutUS</Link>
            </div>
            <div className="navbar-search-wrap">
                <input
                    type="text"
                    className="navbar-search"
                    placeholder="Search books..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
        </div>
    )
}