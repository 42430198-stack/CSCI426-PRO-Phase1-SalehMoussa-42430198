import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../Style/book_details.css";
import StarRating from "../components/Star_Raiting";

export default function BookDetails({ books, onDeleteBook }) {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = books.find((item) => String(item.id) === bookId);

    const handleDelete = () => {
        if (!book) {
            return;
        }

        onDeleteBook(book.id);
        navigate("/Home");
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
                    <Link to="/Home" className="back-link">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}