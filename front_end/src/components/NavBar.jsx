import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/navbar.css'

export default function NavBar({ searchTerm, onSearchChange, onLogout, userRole }) {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout();
        navigate('/login', { replace: true });
    };

    return (
        <div className="my_navbar">
            <div className="navbar-links">
                <Link className="link" to="/Home">Home</Link>
                {userRole !== 'admin' && <Link className="link" to="/mybooks">My Books</Link>}
                {userRole === 'admin' && <Link className="link" to="/editing">Editing</Link>}
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
                <button type="button" className="logout-btn" onClick={handleLogoutClick}>Logout</button>
            </div>
        </div>
    )
}