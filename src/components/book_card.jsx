import React from "react";
import { Link } from "react-router-dom";
import '../Style/book_card.css'

function getCardImageUrl(imageUrl) {
    if (!imageUrl) {
        return '';
    }

    const match = imageUrl.match(/\/books\/(\d+[il])\/(\d+)\.jpg$/);
    if (!match) {
        return imageUrl;
    }

    const [, timestamp, goodreadsId] = match;
    return `https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/${timestamp}/${goodreadsId}._SY120_.jpg`;
}

export default function BookCard({ book }) {
    const currentBook = book || {};
    const cardImage = getCardImageUrl(currentBook.image);

    return (
        <div className="book-card">
            <img src={cardImage}
                alt={currentBook.name || 'Book cover'}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="book-image" />
            <div className="book-details">
                <div className="book-title-more">
                    <h3 className="book-title">{currentBook.name || 'Untitled book'}</h3>

                    <div className="learn-more">
                        <Link className="learn-more-btn" to={`/book/${currentBook.id}`}>Learn More</Link>
                    </div>
                </div>
                <div className="book-genres">
                    {currentBook.genres && currentBook.genres.length > 0 ? (
                        currentBook.genres.map((genre, index) => (
                            <span key={index} className="book-genre">{genre}</span>
                        ))
                    ) : (
                        <span className="book-genre">No genres available</span>
                    )}
                </div>
            </div>
        </div>
    );
}