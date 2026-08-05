import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../Style/book_details.css";
import StarRating from "../components/Star_Raiting";

const API_BASE = process.env.REACT_APP_BOOKS_API_URL
    ? process.env.REACT_APP_BOOKS_API_URL.replace('/books', '')
    : 'http://localhost:5000/api';

export default function BookDetails({ books, onDeleteBook, userId, userRole }) {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = books.find((item) => String(item.id) === bookId);

    const [userEntry, setUserEntry] = useState(null);
    const [ratingInput, setRatingInput] = useState('');
    const [showRatingInput, setShowRatingInput] = useState(false);

    useEffect(() => {
        if (!userId || !bookId) return;
        axios.get(`${API_BASE}/users/${userId}/books`)
            .then((res) => {
                const entry = (res.data || []).find((e) => String(e.book_id) === bookId);
                setUserEntry(entry || null);
                if (entry?.user_rating != null) setRatingInput(String(entry.user_rating));
            })
            .catch(() => {});
    }, [userId, bookId]);

    const saveEntry = async (status, rating) => {
        if (!userId) return;
        const clampedRating = rating !== '' ? Math.min(5, Math.max(0, Number(rating))) : '';
        await axios.post(`${API_BASE}/users/${userId}/books`, {
            bookId: Number(bookId),
            status,
            userRating: clampedRating !== '' ? clampedRating : null,
        });
        setUserEntry({ status, user_rating: clampedRating !== '' ? clampedRating : null });
        setShowRatingInput(false);
    };

    const removeEntry = async () => {
        if (!userId) return;
        await axios.delete(`${API_BASE}/users/${userId}/books/${bookId}`);
        setUserEntry(null);
        setRatingInput('');
        setShowRatingInput(false);
    };

    if (!book) {
        return (
            <div className="book-details-page">
                <div className="book-details-container">
                    <h1>Book not found</h1>
                    <Link to="/Home" className="back-link">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="book-details-page">
            <div className="book-details-container">
                <img
                    src={book.image || ""}
                    alt={book.name}
                    referrerPolicy="no-referrer"
                    className="book-details-image"
                />

                <div className="book-details-content">
                    <h1>{book.name}</h1>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>Publish date:</strong> {book.publish_date}</p>
                    <div className="book-rating-row">
                        <strong>Rating:</strong>
                        <StarRating value={book.goodreads_rating} />
                    </div>
                    <p><strong>Genres:</strong> {book.genres.join(", ")}</p>
                    <p>{book.back_cover_story}</p>

                    {userId && userRole !== 'admin' && (
                        <div className="book-list-actions">
                            {!userEntry && (
                                <>
                                    <button className="want-btn" onClick={() => saveEntry('want_to_read', '')}>+ Want to Read</button>
                                    <button className="read-btn" onClick={() => setShowRatingInput(true)}>✓ Already Read</button>
                                </>
                            )}

                            {userEntry?.status === 'want_to_read' && (
                                <>
                                    <span className="status-badge">📌 Want to Read</span>
                                    <button className="read-btn" onClick={() => setShowRatingInput(true)}>✓ Mark as Read</button>
                                    <button className="remove-btn" onClick={removeEntry}>Remove</button>
                                </>
                            )}

                            {userEntry?.status === 'read' && (
                                <>
                                    <span className="status-badge">✅ Read</span>
                                    {userEntry.user_rating != null && (
                                        <span className="status-badge">My rating: {userEntry.user_rating}</span>
                                    )}
                                    <button className="read-btn" onClick={() => setShowRatingInput(true)}>Update Rating</button>
                                    <button className="remove-btn" onClick={removeEntry}>Remove</button>
                                </>
                            )}

                            {showRatingInput && (
                                <div className="rating-input-row">
                                    <input
                                        type="number"
                                        min="0"
                                        max="5"
                                        step="0.1"
                                        placeholder="Your rating (0-5)"
                                        value={ratingInput}
                                        onChange={(e) => setRatingInput(e.target.value)}
                                        className="rating-input"
                                    />
                                    <button className="read-btn" onClick={() => saveEntry('read', ratingInput)}>Save</button>
                                    <button className="remove-btn" onClick={() => setShowRatingInput(false)}>Cancel</button>
                                </div>
                            )}
                        </div>
                    )}

                    <Link to="/Home" className="back-link">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}