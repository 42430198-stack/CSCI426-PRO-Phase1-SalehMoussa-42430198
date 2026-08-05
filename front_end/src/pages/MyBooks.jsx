import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarRating from '../components/Star_Raiting';
import '../Style/my_books.css';

const API_BASE = process.env.REACT_APP_BOOKS_API_URL
    ? process.env.REACT_APP_BOOKS_API_URL.replace('/books', '')
    : 'http://localhost:5000/api';

export default function MyBooks({ userId }) {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) { setLoading(false); return; }
        axios.get(`${API_BASE}/users/${userId}/books`)
            .then((res) => setEntries(Array.isArray(res.data) ? res.data : []))
            .catch(() => {})
            .finally(() => setLoading(false));
    }, [userId]);

    const wantToRead = entries.filter((e) => e.status === 'want_to_read');
    const alreadyRead = entries.filter((e) => e.status === 'read');

    if (loading) return <div className="my-books-page"><p>Loading...</p></div>;

    return (
        <div className="my-books-page">
            <h1 className="my-books-title">My Books</h1>

            <section className="my-books-section">
                <h2>Want to Read <span className="count">({wantToRead.length})</span></h2>
                {wantToRead.length === 0 ? (
                    <p className="empty-msg">No books added yet.</p>
                ) : (
                    <table className="my-books-table">
                        <thead>
                            <tr>
                                <th>Cover</th>
                                <th>Title</th>
                                <th>Publisher</th>
                                <th>Publish Date</th>
                                <th>Goodreads Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wantToRead.map((entry) => (
                                <tr key={entry.book_id}>
                                    <td>
                                        <Link to={`/book/${entry.book_id}`}>
                                            <img src={entry.image || ''} alt={entry.name} referrerPolicy="no-referrer" className="table-book-img" />
                                        </Link>
                                    </td>
                                    <td><Link className="table-book-link" to={`/book/${entry.book_id}`}>{entry.name}</Link></td>
                                    <td>{entry.publisher}</td>
                                    <td>{entry.publish_date ? String(entry.publish_date).slice(0, 10) : '—'}</td>
                                    <td><StarRating value={Number(entry.goodreads_rating)} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>

            <section className="my-books-section">
                <h2>Already Read <span className="count">({alreadyRead.length})</span></h2>
                {alreadyRead.length === 0 ? (
                    <p className="empty-msg">No books read yet.</p>
                ) : (
                    <table className="my-books-table">
                        <thead>
                            <tr>
                                <th>Cover</th>
                                <th>Title</th>
                                <th>Publisher</th>
                                <th>Publish Date</th>
                                <th>Goodreads Rating</th>
                                <th>My Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alreadyRead.map((entry) => (
                                <tr key={entry.book_id}>
                                    <td>
                                        <Link to={`/book/${entry.book_id}`}>
                                            <img src={entry.image || ''} alt={entry.name} referrerPolicy="no-referrer" className="table-book-img" />
                                        </Link>
                                    </td>
                                    <td><Link className="table-book-link" to={`/book/${entry.book_id}`}>{entry.name}</Link></td>
                                    <td>{entry.publisher}</td>
                                    <td>{entry.publish_date ? String(entry.publish_date).slice(0, 10) : '—'}</td>
                                    <td><StarRating value={Number(entry.goodreads_rating)} /></td>
                                    <td>
                                        {entry.user_rating != null
                                            ? <StarRating value={Number(entry.user_rating)} />
                                            : <span className="no-rating">—</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>
        </div>
    );
}
