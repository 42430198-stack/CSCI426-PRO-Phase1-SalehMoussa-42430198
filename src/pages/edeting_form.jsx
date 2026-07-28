import React from 'react';
import { useEffect, useState } from 'react';
import '../Style/editing_form.css';

const emptyBook = {
    name: '',
    image: '',
    publisher: '',
    publish_date: '',
    goodreads_rating: '',
    genres: [],
    back_cover_story: '',
};

export default function EditingForm({ initialBook, mode, onSubmit, onCancel }) {
    const [editedBook, setEditedBook] = useState(emptyBook);
    const [genresText, setGenresText] = useState('');

    useEffect(() => {
        const sourceBook = initialBook || emptyBook;
        setEditedBook({
            ...emptyBook,
            ...sourceBook,
            goodreads_rating: sourceBook.goodreads_rating ?? '',
        });
        setGenresText((sourceBook.genres || []).join(', '));
    }, [initialBook]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        const payload = {
            ...editedBook,
            goodreads_rating: Number(editedBook.goodreads_rating) || 0,
            genres: genresText
                .split(',')
                .map((genre) => genre.trim())
                .filter((genre) => genre.length > 0),
        };

        onSubmit(payload);
    };

    const actionLabel = mode === 'add' ? 'Add' : 'Save';

    return (
        <div className="editing-form">
            <h2>{mode === 'add' ? 'Add Book' : 'Edit Book'}</h2>
            <input
                type="text"
                name="name"
                value={editedBook.name}
                onChange={handleChange}
                placeholder="Book name"
            />
            <input
                type="text"
                name="image"
                value={editedBook.image}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <input
                type="text"
                name="publisher"
                value={editedBook.publisher}
                onChange={handleChange}
                placeholder="Publisher"
            />
            <input
                type="date"
                name="publish_date"
                value={editedBook.publish_date}
                onChange={handleChange}
                placeholder="Publish date"
            />
            <input
                type="number"
                min="0"
                max="5"
                step="0.01"
                name="goodreads_rating"
                value={editedBook.goodreads_rating}
                onChange={handleChange}
                placeholder="Goodreads rating"
            />
            <input
                type="text"
                value={genresText}
                onChange={(e) => setGenresText(e.target.value)}
                placeholder="Genres (comma separated)"
            />
            <textarea
                name="back_cover_story"
                value={editedBook.back_cover_story}
                onChange={handleChange}
                placeholder="Back cover story"
                rows="5"
            />
            <div className="form-actions">
                <button type="button" className="edit-button" onClick={handleSubmit}>{actionLabel}</button>
                <button type="button" className="delete-button" onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}