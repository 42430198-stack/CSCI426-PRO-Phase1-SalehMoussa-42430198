import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../Style/editing.css'
import EditingForm from "./edeting_form.jsx";


export default function Editing({ books, onDeleteBook, onUpdateBook, onAddBook, searchTerm }) {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const bookList = books || [];
    const normalizedSearch = (searchTerm || '').trim().toLowerCase();
    const isListMode = !bookId;
    const isAddMode = bookId === "add";
    const selectedBook = !isListMode && !isAddMode
        ? bookList.find((book) => String(book.id) === bookId)
        : null;

    const handleSubmit = (bookPayload) => {
        if (isAddMode) {
            onAddBook(bookPayload);
        } else if (selectedBook) {
            onUpdateBook({ ...bookPayload, id: selectedBook.id });
        }

        navigate("/editing");
    };

    if (!isListMode && !isAddMode && !selectedBook) {
        return (
            <div className="editing-page">
                <h2>Book not found</h2>
                <Link className="edit-button" to="/editing">Back</Link>
            </div>
        );
    }

    if (!isListMode) {
        return (
            <div className="editing-page">
                <EditingForm
                    initialBook={selectedBook}
                    mode={isAddMode ? "add" : "edit"}
                    onSubmit={handleSubmit}
                    onCancel={() => navigate("/editing")}
                />
            </div>
        );
    }

    const visibleBooks = bookList.filter((book) => {
        if (!normalizedSearch) {
            return true;
        }

        const nameText = (book.name || '').toLowerCase();
        const publisherText = (book.publisher || '').toLowerCase();
        const genresText = (book.genres || []).join(' ').toLowerCase();

        return nameText.includes(normalizedSearch)
            || publisherText.includes(normalizedSearch)
            || genresText.includes(normalizedSearch);
    });

    return (
        <div className="editing-page">
            <div className="editing-actions">
                <Link className="add-button" to="/editing/add">Add Book</Link>
            </div>
            <div className="editing-container">
                {visibleBooks.map((book) => (
                    <div key={book.id} className="book-item">
                        <h3>{book.name}</h3>
                        <div className="book-buttons">
                            <Link className="edit-button" to={`/editing/${book.id}`}>Edit</Link>
                            <button className="delete-button" onClick={() => onDeleteBook(book.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}